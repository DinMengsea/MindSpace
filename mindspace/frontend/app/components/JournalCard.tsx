import { MoreVertical } from "lucide-react";

interface JournalCardProps {
  title: string;
  preview: string;
  date: string;
  mood: string;
}

export default function JournalCard({
  title,
  preview,
  date,
  mood,
}: JournalCardProps) {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-all duration-300 hover:border-indigo-200 hover:shadow-md">

      {/* Left */}
      <div className="flex min-w-0 items-center gap-4">

        {/* Mood */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-xl transition-transform duration-300 group-hover:scale-105">
          {mood}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-900">
            {title}
          </h3>

          <p className="mt-1 line-clamp-1 max-w-[500px] text-sm text-zinc-500">
            {preview}
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="ml-6 flex shrink-0 flex-col items-end">

        <p className="text-xs text-zinc-400">
          {date}
        </p>

        <div className="mt-2 flex items-center gap-3">

          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            Happy
          </span>

          <button className="rounded-lg p-1 transition hover:bg-zinc-100">
            <MoreVertical className="h-4 w-4 text-zinc-400" />
          </button>

        </div>

      </div>

    </div>
  );
}