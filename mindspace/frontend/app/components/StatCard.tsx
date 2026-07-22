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
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl">
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-medium text-zinc-500">
            {title}
          </p>

          <h3 className="mt-0.5 text-2xl font-bold text-zinc-900">
            {value}
          </h3>
        </div>

      </div>

      <p className="mt-3 text-xs text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}