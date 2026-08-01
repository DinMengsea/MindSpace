<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\User;
use Illuminate\Http\Request;
use App\Services\NotificationService;
use Illuminate\Support\Facades\Auth;

class FriendController extends Controller
{
    // Send Friend Request
    public function sendRequest(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:users,id',
        ]);

        if ($request->receiver_id == auth()->id()) {
            return response()->json([
                'message' => 'You cannot send a friend request to yourself.'
            ], 400);
        }

        $exists = Friend::where(function ($query) use ($request) {
            $query->where('sender_id', auth()->id())
                  ->where('receiver_id', $request->receiver_id);
        })->orWhere(function ($query) use ($request) {
            $query->where('sender_id', $request->receiver_id)
                  ->where('receiver_id', auth()->id());
        })->first();

        if ($exists) {
            return response()->json([
                'message' => 'Friend request already exists.'
            ], 400);
        }

        $friend = Friend::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $request->receiver_id,
            'status' => 'pending',
        ]);

        # create notification 
        $this->notificationService->notify(
            $request->receiver_id,
            'friend_request',
            'New Friend Request',
            Auth::user()->name . ' sent you a friend request.',
            [
                'friend_request_id' => $friend->id,
                'sender_id' => Auth::id(),
            ]
        );

        return response()->json([
            'message' => 'Friend request sent successfully.',
            'friend_request' => $friend,
        ], 201);
    }

    // Temporary methods (we'll implement next)
    public function index()
    {
        $friends = Friend::where(function ($query) {
                $query->where('sender_id', auth()->id())
                    ->orWhere('receiver_id', auth()->id());
            })
            ->where('status', 'accepted')
            ->get();

        return response()->json([
            'friends' => $friends
        ]);
    }
    public function requests()
    {
        $requests = Friend::where('receiver_id', auth()->id())
            ->where('status', 'pending')
            ->get();

        return response()->json([
            'friend_requests' => $requests
        ]);
    }
    public function accept($id)
    {
        $friend = Friend::where('id', $id)
            ->where('receiver_id', auth()->id())
            ->first();

        if (!$friend) {
            return response()->json([
                'message' => 'Friend request not found.'
            ], 404);
        }

        $friend->status = 'accepted';
        $friend->save();

        return response()->json([
            'message' => 'Friend request accepted.',
            'friend' => $friend
        ]);
    }
    public function reject($id)
    {
        $friend = Friend::where('id', $id)
            ->where('receiver_id', auth()->id())
            ->where('status', 'pending')
            ->first();

        if (!$friend) {
            return response()->json([
                'message' => 'Friend request not found.'
            ], 404);
        }

        $friend->status = 'rejected';
        $friend->save();

        return response()->json([
            'message' => 'Friend request rejected.',
            'friend' => $friend
        ]);
    }
    public function remove($id)
    {
        $friend = Friend::where('id', $id)
            ->where(function ($query) {
                $query->where('sender_id', auth()->id())
                    ->orWhere('receiver_id', auth()->id());
            })
            ->where('status', 'accepted')
            ->first();

        if (!$friend) {
            return response()->json([
                'message' => 'Friend not found.'
            ], 404);
        }

        $friend->delete();

        return response()->json([
            'message' => 'Friend removed successfully.'
        ]);
    }

    protected NotificationService $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }
}