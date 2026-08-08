"use client";

import { Heart } from "lucide-react";

interface TodaysMoodProps {
  emoji?: string;
  label?: string;
  description?: string;
}

export default function TodaysMood({
  emoji = "🙂",
  label = "Good",
  description = "You're having a positive day.",
}: TodaysMoodProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300

        dark:border-zinc-800
        dark:bg-zinc-900
      "
    >

      {/* Decorative spheres */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-indigo-50

          dark:bg-zinc-800
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-5
          h-24
          w-24
          rounded-full
          bg-violet-50

          dark:bg-zinc-800
        "
      />

      {/* Content */}

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-indigo-50
              text-indigo-600

              dark:bg-zinc-800
              dark:text-white
            "
          >
            <Heart className="h-5 w-5" />
          </div>

          <div>

            <h2
              className="
                font-semibold
                text-zinc-900

                dark:text-white
              "
            >
              Today's Mood
            </h2>

            <p
              className="
                mt-0.5
                text-xs
                text-zinc-400
              "
            >
              Your latest check-in
            </p>

          </div>

        </div>


        {/* Mood */}

        <div className="mt-8 flex flex-col items-center text-center">

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-indigo-50
              shadow-sm

              dark:bg-zinc-800
            "
          >
            <span className="text-5xl">
              {emoji}
            </span>
          </div>


          <h3
            className="
              mt-5
              text-2xl
              font-bold
              text-zinc-900

              dark:text-white
            "
          >
            {label}
          </h3>


          <p
            className="
              mt-2
              max-w-[220px]
              text-sm
              leading-6
              text-zinc-500

              dark:text-zinc-400
            "
          >
            {description}
          </p>

        </div>


        {/* Bottom message */}

        <div
          className="
            mt-7
            rounded-2xl
            bg-zinc-50
            px-4
            py-3
            text-center

            dark:bg-zinc-800
          "
        >
          <p
            className="
              text-xs
              text-zinc-500

              dark:text-zinc-400
            "
          >
            Keep checking in with yourself 💙
          </p>
        </div>

      </div>

    </section>
  );
}