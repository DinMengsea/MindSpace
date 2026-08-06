<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JournalEntryController;
use App\Http\Controllers\MoodLogController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeedController;
use App\Http\Controllers\NotificationController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);
    Route::put('/change-password', [ProfileController::class, 'changePassword']);
    Route::post('/profile/avatar', [ProfileController::class, 'uploadAvatar']);

    Route::post('/journal-entries', [JournalEntryController::class, 'store']);
    Route::get('/journal-entries', [JournalEntryController::class, 'index']);
    Route::get('/journal-entries/{id}', [JournalEntryController::class, 'show']);
    Route::put('/journal-entries/{id}', [JournalEntryController::class, 'update']);
    Route::delete('/journal-entries/{id}', [JournalEntryController::class, 'destroy']);

    Route::post('/mood-logs', [MoodLogController::class, 'store']);
    Route::get('/mood-logs', [MoodLogController::class, 'index']);
    Route::get('/mood-logs/{id}', [MoodLogController::class, 'show']);
    Route::put('/mood-logs/{id}', [MoodLogController::class, 'update']);
    Route::delete('/mood-logs/{id}', [MoodLogController::class, 'destroy']);

    Route::post('/friends/request', [FriendController::class, 'sendRequest']);
    Route::get('/friends', [FriendController::class, 'index']);
    Route::get('/friends/requests', [FriendController::class, 'requests']);
    Route::put('/friends/accept/{id}', [FriendController::class, 'accept']);
    Route::delete('/friends/reject/{id}', [FriendController::class, 'reject']);
    Route::delete('/friends/remove/{id}', [FriendController::class, 'remove']);

    Route::post('/messages/send', [MessageController::class, 'send']);
    Route::get('/messages', [MessageController::class, 'chatList']);
    Route::get('/messages/{friendId}', [MessageController::class, 'conversation']);
    Route::put('/messages/read/{friendId}', [MessageController::class, 'markAsRead']);
    Route::delete('/messages/{id}', [MessageController::class, 'destroy']);

    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    Route::post('/posts/{id}/like', [LikeController::class, 'like']);
    Route::delete('/posts/{id}/like', [LikeController::class, 'unlike']);
    Route::get('/posts/{id}/likes', [LikeController::class, 'countLikes']);

    Route::post('/posts/{id}/comments', [CommentController::class, 'store']);
    Route::get('/posts/{id}/comments', [CommentController::class, 'index']);
    Route::put('/comments/{id}', [CommentController::class, 'update']); 
    Route::delete('/comments/{id}', [CommentController::class, 'destroy']);

    Route::get('/feed', [FeedController::class, 'index']);

    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::put('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
    Route::put('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);
    Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);
    Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);

    Route::post('/messages/typing', [MessageController::class, 'typing']);

});