import JournalCard from "./JournalCard";
import { ArrowRight } from "lucide-react";

export default function RecentEntries() {
  return (
    <section
      className="
        mt-5
        w-full
        rounded-3xl

        border
        border-zinc-200
        dark:border-zinc-800

        bg-white
        dark:bg-zinc-900

        p-5
        shadow-sm

        transition-colors
        duration-300
      "
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Recent Entries
        </h2>

        <button
          className="
            flex
            items-center
            gap-1

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
          View All
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

      {/* Journal List */}
      <div className="space-y-3">

        <JournalCard
          title="Feeling Productive"
          date="Today • 8:30 PM"
          mood="😊"
          preview="Finished building the dashboard for MindSpace today. I'm really happy with the progress..."
        />

        <JournalCard
          title="Peaceful Evening"
          date="Yesterday • 7:10 PM"
          mood="😌"
          preview="Went for a walk after class. It helped clear my mind and relax after a busy day..."
        />

        <JournalCard
          title="A Tough Day"
          date="Jul 18 • 10:45 PM"
          mood="😔"
          preview="Today felt overwhelming with assignments and deadlines, but writing helped me organize my thoughts..."
        />

      </div>
    </section>
  );
}