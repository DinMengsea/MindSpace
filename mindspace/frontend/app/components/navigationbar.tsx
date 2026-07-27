"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Users,
  Bot,
  Notebook,
  Activity,
  ChartColumn,
  Library,
  HeartPlus,
  Settings,
} from "lucide-react";

interface NavigationBarProp {
  onOpenSettings: () => void;
}

const menu = [
  { href: "/", icon: House, title: "Home" },
  { href: "/aicompanion", icon: Bot, title: "AI Companion" },
  { href: "/community", icon: Users, title: "Community" },
  { href: "/journal", icon: Notebook, title: "Journal" },
  { href: "/moodtracker", icon: Activity, title: "Mood Tracker" },
  { href: "/analysis", icon: ChartColumn, title: "Analysis" },
  { href: "/resource", icon: Library, title: "Resources" },
];

export default function NavigationBar({
  onOpenSettings,
}: NavigationBarProp) {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col">

      {/* Top Menu */}
      <div className="flex-1 overflow-y-auto space-y-2 p-3 sm:p-4 lg:p-5">

        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3
                rounded-xl
                px-3 py-2.5
                lg:px-4 lg:py-3

                text-xs sm:text-sm
                font-medium

                transition-all
                duration-300

                ${
                  active
                    ? `
                        bg-zinc-100
                        dark:bg-zinc-800
                        text-zinc-900
                        dark:text-white
                        shadow-sm
                      `
                    : `
                        text-zinc-600
                        dark:text-zinc-300

                        hover:bg-zinc-100
                        dark:hover:bg-zinc-800

                        hover:text-zinc-900
                        dark:hover:text-white
                      `
                }
              `}
            >
              <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
              {item.title}
            </Link>
          );
        })}

      </div>

      {/* Bottom Menu */}
      <div
        className="
          space-y-2
          border-t
          border-zinc-200
          dark:border-zinc-800

          bg-white
          dark:bg-zinc-900

          p-3
          sm:p-4
          lg:p-5

          transition-colors
          duration-300
        "
      >

        <Link
          href="/support"
          className="
            flex items-center gap-3
            rounded-xl
            px-3 py-2.5
            lg:px-4 lg:py-3

            text-xs sm:text-sm
            font-medium

            text-zinc-600
            dark:text-zinc-300

            transition-all
            duration-300

            hover:bg-zinc-100
            dark:hover:bg-zinc-800

            hover:text-zinc-900
            dark:hover:text-white
          "
        >
          <HeartPlus className="h-5 w-5 lg:h-6 lg:w-6" />
          Support
        </Link>

        <button
          onClick={onOpenSettings}
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-3 py-2.5
            lg:px-4 lg:py-3

            text-xs sm:text-sm
            font-medium

            text-zinc-600
            dark:text-zinc-300

            transition-all
            duration-300

            hover:bg-zinc-100
            dark:hover:bg-zinc-800

            hover:text-zinc-900
            dark:hover:text-white
          "
        >
          <Settings className="h-5 w-5 lg:h-6 lg:w-6" />
          Settings
        </button>

      </div>
    </nav>
  );
}