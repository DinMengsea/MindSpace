"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface Mood {
  id: string;
  emoji: string;
  label: string;
}

const moods: Mood[] = [
  {
    id: "amazing",
    emoji: "😄",
    label: "Amazing",
  },
  {
    id: "good",
    emoji: "🙂",
    label: "Good",
  },
  {
    id: "okay",
    emoji: "😐",
    label: "Okay",
  },
  {
    id: "not-good",
    emoji: "😕",
    label: "Not Good",
  },
  {
    id: "awful",
    emoji: "😣",
    label: "Awful",
  },
];

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<string | null>(
    null
  );

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        px-8
        py-6
        transition-colors
        duration-300

        bg-gradient-to-r
        from-indigo-50
        via-violet-50
        to-purple-50

        dark:bg-zinc-900
        dark:bg-none
        dark:border
        dark:border-zinc-800
      "
    >

      {/* Decorative spheres */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-16
          h-44
          w-44
          rounded-full
          bg-white/40
          blur-sm

          dark:bg-zinc-800
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-24
          top-8
          h-20
          w-20
          rounded-full
          bg-violet-200/40

          dark:bg-zinc-800
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          right-12
          h-32
          w-32
          rounded-full
          bg-purple-200/40
          blur-sm

          dark:bg-zinc-800
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          right-48
          h-12
          w-12
          rounded-full
          bg-white/50

          dark:bg-zinc-700
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
              bg-white/70
              text-indigo-600
              shadow-sm
              backdrop-blur

              dark:bg-zinc-800
              dark:text-white
            "
          >
            <Heart className="h-5 w-5" />
          </div>

          <span
            className="
              text-sm
              font-medium
              text-indigo-600

              dark:text-zinc-300
            "
          >
            Daily Check-in
          </span>

        </div>


        {/* Heading */}

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            leading-tight
            text-indigo-600

            dark:text-white
          "
        >
          How are you feeling today?
        </h2>


        <p
          className="
            mt-3
            text-[15px]
            leading-7
            text-zinc-500

            dark:text-zinc-400
          "
        >
          Take a moment to check in with yourself.
          There are no right or wrong feelings.
        </p>


        {/* Mood buttons */}

        <div className="mt-6 flex flex-wrap gap-3">

          {moods.map((mood) => {

            const selected = selectedMood === mood.id;

            return (
              <button
                key={mood.id}
                type="button"
                onClick={() => setSelectedMood(mood.id)}
                className={`
                  flex
                  min-w-[78px]
                  flex-col
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-4
                  py-3
                  transition-all
                  duration-300

                  ${
                    selected
                      ? `
                        -translate-y-1
                        border-indigo-200
                        bg-white
                        shadow-md

                        dark:border-zinc-600
                        dark:bg-zinc-800
                      `
                      : `
                        border-white/70
                        bg-white/50
                        backdrop-blur-sm

                        hover:-translate-y-1
                        hover:border-indigo-200
                        hover:bg-white/80

                        dark:border-zinc-700
                        dark:bg-zinc-800
                        dark:hover:border-zinc-600
                        dark:hover:bg-zinc-700
                      `
                  }
                `}
              >
                <span className="text-3xl">
                  {mood.emoji}
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-zinc-600

                    dark:text-zinc-300
                  "
                >
                  {mood.label}
                </span>
              </button>
            );
          })}

        </div>


        {/* Selected message */}

        {selectedMood && (
          <div
            className="
              mt-4
              inline-flex
              rounded-xl
              bg-white/60
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-600
              backdrop-blur

              dark:bg-zinc-800
              dark:text-zinc-300
            "
          >
            Thank you for checking in with yourself today 💙
          </div>
        )}

      </div>

    </section>
  );
}