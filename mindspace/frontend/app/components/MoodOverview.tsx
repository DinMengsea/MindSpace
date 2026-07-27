"use client";

import MoodPie from "./MoodPie";

export default function MoodOverview() {
  return (
    <section
      className="
        rounded-3xl
        border

        border-zinc-200
        dark:border-zinc-800

        bg-white
        dark:bg-zinc-900

        p-6
        shadow-sm

        transition-colors
        duration-300
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Mood Overview
        </h2>

        <button
          className="
            text-sm
            font-medium

            text-zinc-600
            dark:text-zinc-400

            transition-colors
            duration-300

            hover:text-zinc-900
            dark:hover:text-white
          "
        >
          This Week ▼
        </button>
      </div>

      {/* Chart + Legend */}
      <div className="flex items-center justify-between gap-4">

        <MoodPie />

        <div className="space-y-4">

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Happy
              </p>
            </div>

            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              52%
            </span>
          </div>

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Calm
              </p>
            </div>

            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              25%
            </span>
          </div>

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Anxious
              </p>
            </div>

            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              10%
            </span>
          </div>

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-400" />
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Sad
              </p>
            </div>

            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              13%
            </span>
          </div>

        </div>

      </div>

      {/* Encouragement Card */}
      <div
        className="
          mt-6
          rounded-2xl
          p-4

          bg-gradient-to-r
          from-violet-50
          to-indigo-50

          dark:bg-zinc-800
          dark:bg-none

          transition-colors
          duration-300
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full

              bg-violet-100
              dark:bg-zinc-700
            "
          >
            💜
          </div>

          <div>

            <h3 className="font-semibold text-zinc-900 dark:text-white">
              You're doing great!
            </h3>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Keep writing, keep growing. ✨
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}