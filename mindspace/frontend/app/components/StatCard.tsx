import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl

        border
        border-zinc-200
        dark:border-zinc-800

        bg-white
        dark:bg-zinc-900

        p-4
        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl

            bg-zinc-100
            dark:bg-zinc-800

            transition-colors
            duration-300
          "
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {title}
          </p>

          <h3 className="mt-0.5 text-2xl font-bold text-zinc-900 dark:text-white">
            {value}
          </h3>
        </div>

      </div>

      <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
        {subtitle}
      </p>
    </div>
  );
}