<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    // Get all posts
    public function index()
    {
        $post = Post::with('user')
              -> latest()
              ->paginate(10);
        
        return response() -> json($post);
    }

    // Create a new post
    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
            'image' => 'nullable|string',
        ]);

        $post = Post::create([
            'user_id' => Auth::id(),
            'content' => $validated['content'],
            'image' => $validated['image'] ?? null,
        ]);

        return response() -> json([
            'message' => 'Post create successfully.',
            'post' => $post,
        ],201);
    }

    // Get one post
    public function show(string $id)
    {
        $post = Post::with('user')->find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        return response()->json($post);
    }

    // Update a post
    public function update(Request $request, string $id)
    {
        $post = Post::find($id);

        if(!$post){
            return response()->json([
                'message' => 'Post not found.',
            ],404);
        }
        if($post->user_id != Auth::id()){
            return response()->json([
                'message' => 'Unauthorized.',
            ],403);
        }
        $validated = $request->validate([
        'content' => 'required|string|max:1000',
        'image' => 'nullable|string',
        ]);

        $post->update($validated);

        return response()->json([
            'message' => 'Post updated successfully',
            'post' => $post
        ]);
    }

    // Delete a post
    public function destroy(string $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        if ($post->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $post->delete();

        return response()->json([
            'message' => 'Post deleted successfully'
        ]);
    }
}