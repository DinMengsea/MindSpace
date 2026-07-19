"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Cake, Brain } from "lucide-react";

export default function SignupPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pb-30">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl border border-slate-200 p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <Brain className="text-indigo-600" size={32} />
            </div>

            <h1 className="mt-4 text-3xl font-bold text-slate-800">
                Create Your Account
            </h1>
            <p className="mt-2 text-slate-500 text-center">
                Join MindSpace and start your journey today.
            </p>
        </div>

        {/* Email */}
        <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <Mail className="text-slate-400" size={20} />
                <input
                    type="email"
                    placeholder="youremail@email.com"
                    className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400"
                />
            </div>
        </div>

        {/* Password */}
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
            </label>
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <Lock className="text-slate-400" size={20} />
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400 text-xl placeholder:text-base"
                />
            </div>
        </div>

        {/* Confirm Password */}
        <div className="mt-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
            </label>
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <Lock className="text-slate-400" size={20} />
                <input
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400 text-xl placeholder:text-base"
                />

            </div>

            {/* Password Match Validation */}
                {confirmPassword && password !== confirmPassword && (
                    <span className="text-red-500 text-sm ml-1">
                        Passwords do not match
                    </span>
                )}
        </div>

        {/* Date of birth */}
        <div className="mt-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
                Date of Birth
            </label>
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <Cake className="text-slate-400" size={20} />
                <input
                    type="date"
                    required
                    className="ml-3 w-full outline-none text-slate-400"
                />
            </div>
        </div>
        
        {/* Signup */}

        <button className="w-full mt-6 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition">
            Sign Up
        </button>
        
        {/* Already have an account? */}
        <p className="mt-4 text-sm text-slate-500 text-center">
            Already have an account?{" "}
            <Link href="/login" 
                  className=" font-semibold text-indigo-600 hover:underline">
                Login
            </Link>
        </p>
      </div>
    </main>
  );
}