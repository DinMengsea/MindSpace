<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{   
    # add comment
    public function store(Request $request, $id)
    {
        // Check if the post exists
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        // Validate the request
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        // Create the comment
        $comment = Comment::create([
            'user_id' => Auth::id(),
            'post_id' => $id,
            'content' => $validated['content'],
        ]);

        // Notify the post owner (except yourself)
        if ($post->user_id != Auth::id()) {
            $this->notificationService->notify(
                $post->user_id,
                'comment',
                'New Comment',
                Auth::user()->name . ' commented on your post.',
                [
                    'post_id' => $post->id,
                    'comment_id' => $comment->id,
                    'commented_by' => Auth::id(),
                ]
            );
        }

        return response()->json([
            'message' => 'Comment created successfully',
            'comment' => $comment,
        ], 201);
    }

    # view comment 
    public function index($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        $comments = Comment::with('user')
            ->where('post_id', $id)
            ->latest()
            ->get();

        return response()->json($comments);
    }

    #update comment
    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'message' => 'Comment not found'
            ], 404);
        }

        if ($comment->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $comment->update($validated);

        return response()->json([
            'message' => 'Comment updated successfully',
            'comment' => $comment,
        ]);
    }

    # delete comment 
    public function destroy($id)
    {
        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'message' => 'Comment not found'
            ], 404);
        }

        if ($comment->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $comment->delete();

        return response()->json([
            'message' => 'Comment deleted successfully'
        ]);
    }

    protected NotificationService $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }
}