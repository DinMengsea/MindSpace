"use client";
import {User, Palette, NotebookPen, Bell, Shield, Lock, CircleHelp, Sparkles, Globe} from "lucide-react";

const menu = [
    { id: "account", icon: User, title: "Account" },
    { id: "appearance", icon: Palette, title: "Appearance" },
    { id: "journal", icon: NotebookPen, title: "Journal" },
    { id: "notification", icon: Bell, title: "Notifications" },
    { id: "privacy", icon: Shield, title: "Privacy" },
    { id: "security", icon: Lock, title: "Security" },
    { id: "language", icon: Globe, title: "Language"},
    { id: "about", icon: CircleHelp, title: "About" },
];

interface SettingSidebarProps{
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function SettingSidebar({activeTab, setActiveTab}: SettingSidebarProps) {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-zinc-200 bg-zinc-50">

      <div className="flex-1 p-5">

        {menu.map((item, index) => {
          const Icon = item.icon;
          const active = activeTab === item.id;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex w-full items-center gap-3 rounded-xl px-4 py-3
                text-left text-sm font-medium transition-all duration-200

                ${
                  active
                    ? "bg-indigo-100 text-indigo-600 shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-indigo-400 hover:shadow-sm"
                }
              `}
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}

      </div>

      <div className="mt-auto p-6 mb-3">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-5 text-white">

          <Sparkles size={22} />

          <h3 className="mt-3 font-semibold">
            MindSpace Premium
          </h3>

          <p className="mt-2 text-sm text-indigo-100">
            Unlock AI insights and advanced wellness tools.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-2 font-semibold text-indigo-600 transition hover:bg-indigo-50">
            Upgrade
          </button>

        </div>
      </div>

    </aside>
  );
}