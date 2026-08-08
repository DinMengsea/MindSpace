"use client";

import { MoreHorizontal, Sparkles } from "lucide-react";

interface AIChatHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

export default function AIChatHeader({
  title = "New Conversation",
  onMenuClick,
}: AIChatHeaderProps) {
  return (
    <header
      className="
        flex
        h-20
        shrink-0
        items-center
        justify-between
        border-b
        border-zinc-200
        bg-white
        px-6

        dark:border-zinc-800
        dark:bg-zinc-900
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">

        {/* AI Icon */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-indigo-100
            text-indigo-600

            dark:bg-zinc-800
            dark:text-indigo-400
          "
        >
          <Sparkles className="h-5 w-5" />
        </div>

        {/* Title */}

        <div>

          <h1
            className="
              text-sm
              font-semibold
              text-zinc-900

              dark:text-white
            "
          >
            {title}
          </h1>

          <div className="mt-0.5 flex items-center gap-1.5">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <p
              className="
                text-xs
                text-zinc-500

                dark:text-zinc-400
              "
            >
              Mindy is here
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Conversation options"
        className="
          rounded-xl
          p-2
          text-zinc-500
          transition-all
          duration-200

          hover:bg-zinc-100
          hover:text-zinc-900

          dark:text-zinc-400
          dark:hover:bg-zinc-800
          dark:hover:text-white
        "
      >
        <MoreHorizontal className="h-5 w-5" />
      </button>

    </header>
  );
}