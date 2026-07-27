"use client";
import { useState, type ComponentType } from "react";
import Sidebar from "../components/sidebar";
import SettingsModal from "../components/SettingsModal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">

      <Sidebar onOpenSettings={() => setOpenSettings(true)} />

      <main className="    
          flex-1
          h-screen
          overflow-y-auto
          bg-slate-50
          dark:bg-zinc-950
          text-zinc-900
          dark:text-white
          px-5
          pt-3
          pb-5
          transition-colors
          duration-300">
        {children}
      </main>

      {openSettings && (
        <SettingsModal
          onClose={() => setOpenSettings(false)}
        />
      )}

    </div>
  );
}
