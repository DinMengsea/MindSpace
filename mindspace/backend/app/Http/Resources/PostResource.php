<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class PostResource extends JsonResource
{
    

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'image' => $this->image,

            'author' => new UserResource($this->user),

            'likes' => $this->likes_count,
            'comments' => $this->comments_count,

            'created_at' => $this->created_at,
        ];
    }
}