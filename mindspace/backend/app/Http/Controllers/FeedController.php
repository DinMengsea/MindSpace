<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Resources\PostResource;

class FeedController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')
            ->withCount(['likes', 'comments'])
            ->latest()
            ->paginate(10);

        return PostResource::collection($posts);
    }
}