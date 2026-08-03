"use client";

import Link from "next/link";
import { Mail, ArrowLeft, Brain } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div
      className="
        flex
        w-full
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-lg

          rounded-3xl

          border
          border-zinc-200
          dark:border-zinc-800

          bg-white
          dark:bg-zinc-900

          p-10

          shadow-xl

          transition-colors
          duration-300
        "
      >
        {/* Logo */}

        <div className="flex flex-col items-center">

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
              size={30}
              className="text-indigo-600 dark:text-white"
            />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-zinc-900 dark:text-white">
            Forgot Password
          </h1>

          <p className="mt-3 max-w-sm text-center leading-7 text-zinc-500 dark:text-zinc-400">
            Don't worry. Enter your email address and we'll send
            you a password reset link.
          </p>

        </div>

        {/* Email */}

        <div className="mt-10">

          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email Address
          </label>

          <div
            className="
              flex
              items-center

              rounded-xl

              border
              border-zinc-200
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
              className="text-zinc-400 dark:text-zinc-500"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="
                ml-3
                w-full

                bg-transparent

                text-zinc-700
                dark:text-white

                placeholder:text-zinc-400
                dark:placeholder:text-zinc-500

                outline-none
              "
            />

          </div>

        </div>

        {/* Button */}

        <button
          className="
            mt-8
            w-full

            rounded-xl

            bg-indigo-600

            py-3

            font-semibold

            text-white

            transition-all

            hover:bg-indigo-700

            dark:bg-white
            dark:text-zinc-900
            dark:hover:bg-zinc-200
          "
        >
          Send Reset Link
        </button>

        {/* Divider */}

        <div className="my-8 flex items-center gap-4">

          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />

          <span className="text-sm text-zinc-400">
            OR
          </span>

          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />

        </div>

        {/* Back */}

        <Link
          href="/login"
          className="
            flex
            items-center
            justify-center
            gap-2

            text-sm

            text-zinc-500
            dark:text-zinc-400

            transition

            hover:text-indigo-600
            dark:hover:text-white
          "
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>

      </div>
    </div>
  );
}