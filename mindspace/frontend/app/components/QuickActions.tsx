"use client";

import { Brain, MessageCircle, PenLine } from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const actions: QuickAction[] = [
  {
    icon: <PenLine className="h-5 w-5" />,
    title: "Write Journal",
    description: "Reflect on your thoughts",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Talk to Mindy",
    description: "Your AI companion",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "Community",
    description: "Connect with others",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-6">

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Quickly access what you need.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {actions.map((action) => (
          <button
            key={action.title}
            type="button"
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-zinc-200
              bg-white
              p-5
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-indigo-200
              hover:shadow-md

              dark:border-zinc-800
              dark:bg-zinc-900
              dark:hover:border-zinc-700
              dark:hover:bg-zinc-900
            "
          >

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
                transition-colors

                group-hover:bg-indigo-100

                dark:bg-zinc-800
                dark:text-zinc-200
                dark:group-hover:bg-zinc-700
              "
            >
              {action.icon}
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {action.title}
              </h3>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {action.description}
              </p>
            </div>

          </button>
        ))}

      </div>

    </section>
  );
}