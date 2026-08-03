<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user()->load('profile');

        return response()->json($user);
    }

    public function update(Request $request)
    {
        $validated = $request -> validate([
            'bio' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'gender' => 'nullable|string|max:20',
            'birthday' => 'nullable|date',
        ]);

        $profile = Auth::user() ->profile;

        $profile -> update($validated);

        return response()->json([
            'message' => 'Profile updated successfully.',
            'profile' => $profile,
        ]);
    }

    public function changePassword(Request $request)
    {
        $validated = $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($validated['current_password'],$user->password)){
            return response() ->json([
                'message' => 'Current password is incorrect.'
            ],400);
        }

        $user->update([
            'password' => Hash::make($validated['new_password']),
        ]);

        return response() -> json([
            'message' => 'Password change successfully.',
        ]);
    }

    public function uploadAvatar(Request $request)
    {
        $validated = $request->validate([
            'avatar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $user = Auth::user();
        $profile = $user->profile;

        // Delete old avatar if it exists
        if ($profile->avatar && Storage::disk('public')->exists($profile->avatar)) {
            Storage::disk('public')->delete($profile->avatar);
        }

        // Store new avatar
        $path = $request->file('avatar')->store('avatars', 'public');

        // Save path in database
        $profile->update([
            'avatar' => $path,
        ]);

        return response()->json([
            'message' => 'Avatar uploaded successfully.',
            'avatar_url' => asset('storage/' . $path),
            'profile' => $profile,
        ]);
    }
    
}
