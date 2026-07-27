"use client";

import { ReactNode } from "react";

interface ThemeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

export default function ThemeCard({
  icon,
  title,
  description,
  active,
  onClick,
}: ThemeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        flex
        flex-col
        items-center

        rounded-2xl

        border

        p-6

        text-center

        transition-all
        duration-300

        ${
          active
            ? `
              border-indigo-500
              bg-indigo-50

              dark:border-white
              dark:bg-zinc-800

              shadow-md
            `
            : `
              border-zinc-200
              dark:border-zinc-700

              bg-white
              dark:bg-zinc-900

              hover:border-indigo-300
              dark:hover:border-zinc-500

              hover:shadow-md
            `
        }
      `}
    >
      {/* Icon */}

      <div
        className={`
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          transition-all
          duration-300

          ${
            active
              ? `
                bg-indigo-100
                text-indigo-600

                dark:bg-zinc-700
                dark:text-white
              `
              : `
                bg-zinc-100
                dark:bg-zinc-800

                text-zinc-600
                dark:text-zinc-300

                group-hover:text-indigo-500
                dark:group-hover:text-white
              `
          }
        `}
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          mt-5

          font-semibold

          text-zinc-900
          dark:text-white

          transition-colors
          duration-300
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-2

          text-sm

          text-zinc-500
          dark:text-zinc-400

          transition-colors
          duration-300
        "
      >
        {description}
      </p>
    </button>
  );
}