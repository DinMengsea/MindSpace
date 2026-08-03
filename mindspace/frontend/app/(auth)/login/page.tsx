"use client";

import Link from "next/link";
import { Mail, Lock, Eye, EyeClosed, Brain } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

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
            <Brain
              size={32}
              className="text-indigo-600 dark:text-white"
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-slate-500 dark:text-zinc-400">
            Continue your journey with MindSpace.
          </p>

        </div>

        {/* Email */}

        <div className="mb-5">

          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Email
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
            <Mail
              size={20}
              className="text-slate-400 dark:text-zinc-500"
            />

            <input
              type="email"
              placeholder="youremail@email.com"
              className="
                ml-3
                w-full

                bg-transparent

                text-slate-700
                dark:text-white

                placeholder:text-slate-400
                dark:placeholder:text-zinc-500

                outline-none
              "
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
            <Lock
              size={20}
              className="text-slate-400 dark:text-zinc-500"
            />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="
                ml-3
                w-full

                bg-transparent

                text-slate-700
                dark:text-white

                placeholder:text-xl
                placeholder:text-slate-400
                dark:placeholder:text-zinc-500

                outline-none
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                text-slate-400
                transition

                hover:text-slate-600
                dark:text-zinc-500
                dark:hover:text-white
              "
            >
              {showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeClosed size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="mt-4 flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">

            <input
              type="checkbox"
              className="accent-indigo-600"
            />

            Remember me

          </label>

          <Link
            href="/forgot-password"
            className="
              text-indigo-600

              transition

              hover:underline

              dark:text-white
            "
          >
            Forgot password?
          </Link>

        </div>

        {/* Login */}

        <button
          className="
            mt-6
            w-full

            rounded-xl

            bg-indigo-600
            py-3

            font-semibold
            text-white

            transition

            hover:bg-indigo-700

            dark:bg-white
            dark:text-zinc-900
            dark:hover:bg-zinc-200
          "
        >
          Login
        </button>

        {/* Register */}

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-zinc-400">

          Don't have an account?{" "}

          <Link
            href="/signup"
            className="
              font-semibold

              text-indigo-600

              transition

              hover:underline

              dark:text-white
            "
          >
            Register
          </Link>

        </p>

      </div>
    </main>
  );
}