<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function like($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        $alreadyLiked = Like::where('user_id', Auth::id())
            ->where('post_id', $id)
            ->exists();

        if ($alreadyLiked) {
            return response()->json([
                'message' => 'You already liked this post'
            ], 409);
        }

        Like::create([
            'user_id' => Auth::id(),
            'post_id' => $id,
        ]);

        // Notify the post owner (but not yourself)
    if ($post->user_id != Auth::id()) {
        $this->notificationService->notify(
            $post->user_id,
            'like',
            'New Like',
            Auth::user()->name . ' liked your post.',
            [
                'post_id' => $post->id,
                'liked_by' => Auth::id(),
            ]
        );
    }

        return response()->json([
            'message' => 'Post liked successfully'
        ], 201);
    }

    public function unlike($id)
    {
        $like = Like::where('user_id', Auth::id())
            ->where('post_id', $id)
            ->first();

        if (!$like) {
            return response()->json([
                'message' => 'Like not found'
            ], 404);
        }

        $like->delete();

        return response()->json([
            'message' => 'Post unliked successfully'
        ]);
    }

    public function countLikes($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        return response()->json([
            'likes' => $post->likes()->count()
        ]);
    }

    protected NotificationService $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }
}