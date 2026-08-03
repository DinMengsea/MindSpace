<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MoodLog extends Model
{
    protected $fillable = [
        'user_id',
        'mood',
        'note',
        'logged_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}