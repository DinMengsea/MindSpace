<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\MoodLog;

class MoodLogController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'mood' => 'required|string|max:50',
            'note' => 'nullable|string',
            'logged_at' => 'required|date',
        ]);

        $moodLog = Auth::user()->moodLogs()->create($validated);

        return response()->json([
            'message' => 'Mood recorded successfully.',
            'mood_log' => $moodLog,
        ], 201);
    }

    public function index()
    {
        $moodLogs = Auth::user()
            ->moodLogs()
            ->latest()
            ->get();

        return response()->json([
            'mood_logs' => $moodLogs,
        ]);
    }

    public function show($id)
    {
        $moodLog = Auth::user()
            ->moodLogs()
            ->findOrFail($id);

        return response()->json([
            'mood_log' => $moodLog,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'mood' => 'required|string|max:50',
            'note' => 'nullable|string',
            'logged_at' => 'required|date',
        ]);

        $moodLog = Auth::user()
            ->moodLogs()
            ->findOrFail($id);

        $moodLog->update($validated);

        return response()->json([
            'message' => 'Mood updated successfully.',
            'mood_log' => $moodLog,
        ]);
    }
    public function destroy($id)
    {
        $moodLog = Auth::user()
            ->moodLogs()
            ->findOrFail($id);

        $moodLog->delete();

        return response()->json([
            'message' => 'Mood deleted successfully.',
        ]);
    }   
}
