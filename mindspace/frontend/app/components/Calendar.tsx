"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  return (
    <div
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
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        Calendar
      </h2>

      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Keep track of your journal entries.
      </p>

      <div className="mt-6 flex justify-center">
        <DayPicker
          mode="single"
          className="text-zinc-800 dark:text-zinc-200"
          classNames={{
            month_caption:
              "flex items-center justify-between text-zinc-900 dark:text-white",

            caption_label:
              "text-lg font-semibold text-zinc-900 dark:text-white",

            button_previous:
              "rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800",

            button_next:
              "rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800",

            weekday:
              "text-zinc-400 dark:text-zinc-500",

            day:
              "rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800",

            selected:
              "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",

            today:
              "font-bold text-zinc-900 dark:text-white",
          }}
        />
      </div>
    </div>
  );
}