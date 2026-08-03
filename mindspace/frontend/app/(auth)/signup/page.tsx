"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Cake, Brain } from "lucide-react";

import { register } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await register({
            name,
            email,
            password,
            password_confirmation: confirmPassword,
            });

            alert("Account created successfully!");

            router.push("/login");
        } catch (error) {
            if (error instanceof Error) {
            alert(error.message);
            } else {
            alert("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
        };

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center

        px-6
        pb-30

        bg-slate-50
        dark:bg-zinc-950

        transition-colors
        duration-300
      "
    >
      <div
        className="
          w-full
          max-w-xl

          rounded-2xl

          border
          border-slate-200
          dark:border-zinc-800

          bg-white
          dark:bg-zinc-900

          p-8

          shadow-xl

          transition-colors
          duration-300
        "
      >
        {/* Logo */}

        <div className="mb-8 flex flex-col items-center">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-indigo-100
              dark:bg-zinc-800
            "
          >
            <Brain size={32} className="text-indigo-600 dark:text-white" />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white">
            Create Your Account
          </h1>

          <p className="mt-2 text-center text-slate-500 dark:text-zinc-400">
            Join MindSpace and start your journey today.
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
            Name
        </label>

        <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        </div>

        {/* Email */}

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Email
          </label>

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <Mail className="text-slate-400" size={20} />
                <input
                    type="email"
                    placeholder="youremail@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400"
                />
            </div>
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Password
          </label>

          <div
            className="
              flex
              items-center

              rounded-xl

              border
              border-slate-200
              dark:border-zinc-700

              bg-white
              dark:bg-zinc-900

              px-4
              py-3

              transition-all

              focus-within:border-indigo-500
              focus-within:ring-2
              focus-within:ring-indigo-500

              dark:focus:border-white
              dark:focus:ring-zinc-700
            "
          >
            <Lock size={20} className="text-slate-400 dark:text-zinc-500" />

            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
                ml-3
                w-full

                bg-transparent

                text-slate-700
                dark:text-white

                placeholder:text-base
                placeholder:text-slate-400
                dark:placeholder:text-zinc-500

                outline-none
              "
            />
          </div>
        </div>

        {/* Confirm Password */}

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Confirm Password
          </label>

          <div
            className="
              flex
              items-center

              rounded-xl

              border
              border-slate-200
              dark:border-zinc-700

              bg-white
              dark:bg-zinc-900

              px-4
              py-3

              transition-all

              focus-within:border-indigo-500
              focus-within:ring-2
              focus-within:ring-indigo-500

              dark:focus:border-white
              dark:focus:ring-zinc-700
            "
          >
            <Lock size={20} className="text-slate-400 dark:text-zinc-500" />

            <input
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="
                ml-3
                w-full

                bg-transparent

                text-slate-700
                dark:text-white

                placeholder:text-base
                placeholder:text-slate-400
                dark:placeholder:text-zinc-500

                outline-none
              "
            />
          </div>

          {confirmPassword && password !== confirmPassword && (
            <p className="mt-2 ml-1 text-sm text-red-500">
              Passwords do not match.
            </p>
          )}
        </div>

        {/* Date of Birth */}

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Date of Birth
          </label>

          <div
            className="
              flex
              items-center

              rounded-xl

              border
              border-slate-200
              dark:border-zinc-700

              bg-white
              dark:bg-zinc-900

              px-4
              py-3

              transition-all

              focus-within:border-indigo-500
              focus-within:ring-2
              focus-within:ring-indigo-500

              dark:focus:border-white
              dark:focus:ring-zinc-700
            "
          >
            <Cake size={20} className="text-slate-400 dark:text-zinc-500" />

            <input
              type="date"
              required
              className="
                ml-3
                w-full

                bg-transparent

                text-slate-700
                dark:text-white

                outline-none
              "
            />
          </div>
        </div>

        {/* Sign Up */}

        <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full mt-6 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-50"
        >
            {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Login */}

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="
              font-semibold

              text-indigo-600

              transition

              hover:underline

              dark:text-white
            "
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
