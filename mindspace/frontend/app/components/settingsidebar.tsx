"use client";

import {
  User,
  Palette,
  NotebookPen,
  Bell,
  Shield,
  Lock,
  CircleHelp,
  Sparkles,
  Globe,
} from "lucide-react";

import type { SettingTab } from "../components/types";

const menu: {
  id: SettingTab;
  icon: React.ElementType;
  title: string;
}[] = [
  { id: "account", icon: User, title: "Account" },
  { id: "appearance", icon: Palette, title: "Appearance" },
  { id: "journal", icon: NotebookPen, title: "Journal" },
  { id: "notification", icon: Bell, title: "Notifications" },
  { id: "privacy", icon: Shield, title: "Privacy" },
  { id: "security", icon: Lock, title: "Security" },
  { id: "language", icon: Globe, title: "Language" },
  { id: "about", icon: CircleHelp, title: "About" },
];

interface SettingSidebarProps {
  activeTab: SettingTab;
  setActiveTab: React.Dispatch<React.SetStateAction<SettingTab>>;
}

export default function SettingSidebar({
  activeTab,
  setActiveTab,
}: SettingSidebarProps) {
  return (
    <aside
      className="
        flex
        h-full
        w-full
        flex-col
        overflow-hidden

        border-r
        border-zinc-200
        dark:border-zinc-800

        bg-zinc-50
        dark:bg-zinc-900

        transition-colors
        duration-300
      "
    >
      {/* Menu */}
      <div className="flex-1 overflow-y-auto space-y-2 p-3 sm:p-4 lg:p-5">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex
                w-full
                items-center
                gap-3

                rounded-xl

                px-3
                py-2.5

                lg:px-4
                lg:py-3

                text-left
                text-xs
                sm:text-sm
                font-medium

                transition-all
                duration-300

                ${
                  active
                    ? `
                        bg-zinc-200
                        dark:bg-zinc-800

                        text-zinc-900
                        dark:text-white

                        shadow-sm
                      `
                    : `
                        text-zinc-600
                        dark:text-zinc-400

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
            </button>
          );
        })}
      </div>

      {/* Premium */}
      <div
        className="
          mt-auto
          border-t
          border-zinc-200
          dark:border-zinc-800

          p-6
        "
      >
        <div
          className="
            rounded-2xl

            bg-gradient-to-br
            from-indigo-500
            to-violet-500

            p-5

            text-white
          "
        >
          <Sparkles size={22} />

          <h3 className="mt-3 font-semibold">MindSpace Premium</h3>

          <p className="mt-2 text-sm text-indigo-100">
            Unlock AI insights and advanced wellness tools.
          </p>

          <button
            className="
              mt-5
              w-full

              rounded-xl

              bg-white

              py-2.5

              font-semibold

              text-indigo-600

              transition

              hover:bg-indigo-50
            "
          >
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
