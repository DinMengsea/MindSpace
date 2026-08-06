<?php

namespace App\Services;

use App\Models\Notification;
use App\Events\NotificationCreated;

class NotificationService
{
    /**
     * Create a notification and broadcast it.
     */
    public function notify(
        int $userId,
        string $type,
        string $title,
        string $message,
        array $data = []
    ): Notification {

        $notification = Notification::create([
            'user_id'   => $userId,
            'type'      => $type,
            'title'     => $title,
            'message'   => $message,
            'data'      => $data,
            'is_read'   => false,
        ]);

        broadcast(new NotificationCreated($notification));

        return $notification;
    }
}