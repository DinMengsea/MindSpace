<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use App\Models\Message;
use App\Models\Friend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;
use App\Events\MessageSeen;
use App\Events\Typing;

class MessageController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'message' => 'required|string'
        ]);

        $userId = Auth::id();

        // Check if they are accepted friends
        $friend = Friend::where(function ($query) use ($userId, $validated) {
            $query->where('sender_id', $userId)
                  ->where('receiver_id', $validated['receiver_id']);
        })->orWhere(function ($query) use ($userId, $validated) {
            $query->where('sender_id', $validated['receiver_id'])
                  ->where('receiver_id', $userId);
        })
        ->where('status', 'accepted')
        ->first();

        if (!$friend) {
            return response()->json([
                'message' => 'You can only send messages to accepted friends.'
            ], 403);
        }

        $message = Message::create([
            'sender_id' => $userId,
            'receiver_id' => $validated['receiver_id'],
            'message' => $validated['message']
        ]);

        broadcast(new MessageSent($message))->toOthers();

        // Notify the receiver
        $this->notificationService->notify(
            $validated['receiver_id'],
            'message',
            'New Message',
            Auth::user()->name . ' sent you a message.',
            [
                'message_id' => $message->id,
                'sender_id' => Auth::id(),
            ]
        );

        return response()->json([
            'message' => 'Message sent successfully.',
            'data' => $message
        ], 201);
    }

    public function conversation($friendId)
    {
        $userId = Auth::id();

        $messages = Message::where(function ($query) use ($userId, $friendId) {
            $query->where('sender_id', $userId)
                ->where('receiver_id', $friendId);
        })
        ->orWhere(function ($query) use ($userId, $friendId) {
            $query->where('sender_id', $friendId)
                ->where('receiver_id', $userId);
        })
        ->orderBy('created_at')
        ->get();

        return response()->json([
            'conversation' => $messages
        ]);
    }

    public function chatList()
    {
        $userId = Auth::id();

        $messages = Message::where('sender_id', $userId)
            ->orWhere('receiver_id', $userId)
            ->latest()
            ->get();

        $chatList = [];

        foreach ($messages as $message) {

            $friendId = $message->sender_id == $userId
                ? $message->receiver_id
                : $message->sender_id;

            if (!isset($chatList[$friendId])) {

                $chatList[$friendId] = [
                    'friend_id' => $friendId,
                    'last_message' => $message->message,
                    'time' => $message->created_at
                ];
            }
        }

        return response()->json(array_values($chatList));
    }
    public function markAsRead($friendId)
    {
        $userId = Auth::id();

        Message::where('sender_id', $friendId)
            ->where('receiver_id', $userId)
            ->where('is_seen', false)
            ->update([
                'is_seen' => true
            ]);

        broadcast(new MessageSeen($friendId, $userId));

        return response()->json([
            'message' => 'Messages marked as seen.'
        ]);
    }

    public function destroy($id)
    {
        $userId = Auth::id();

        $message = Message::find($id);

        if (!$message) {
            return response()->json([
                'message' => 'Message not found.'
            ], 404);
        }

        if ($message->sender_id != $userId) {   
            return response()->json([
                'message' => 'Unauthorized.'
            ], 403);
        }

        $message->delete();

        return response()->json([
            'message' => 'Message deleted successfully.'
        ], 200);
    }

    protected NotificationService $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function typing(Request $request)
    {
        $validated = $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'typing' => 'required|boolean',
        ]);

        broadcast(new Typing(
            Auth::id(),
            $validated['receiver_id'],
            $validated['typing']
        ))->toOthers();

        return response()->json([
            'message' => 'Typing status broadcasted.'
        ]);
    }
}