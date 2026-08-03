<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\JournalEntry;

class JournalEntryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'mood' => 'nullable|string|max:50',
        ]);

        $journal = Auth::user()->journalEntries()->create($validated);

        return response()->json([
            'message' => 'Journal created successfully.',
            'journal' => $journal,
        ], 201);
    }

    public function index()
    {
        $journals = Auth::user()->journalEntries;

        return response()->json([
            'journals' => $journals,
        ]);
    }

    public function show($id)
    {
        $journal = Auth::user()
            ->journalEntries()
            ->findOrFail($id);

        return response()->json([
            'journal' => $journal,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'mood' => 'nullable|string|max:50',
        ]);

        $journal = Auth::user()
            ->journalEntries()
            ->findOrFail($id);

        $journal->update($validated);

        return response()->json([
            'message' => 'Journal updated successfully.',
            'journal' => $journal,
        ]);
    }

    public function destroy($id)
    {
        $journal = Auth::user()
            ->journalEntries()
            ->findOrFail($id);

        $journal->delete();

        return response()->json([
            'message' => 'Journal deleted successfully.'
        ]);
    }
}
