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
    <div className="flex h-screen bg-slate-50">

      <Sidebar onOpenSettings={() => setOpenSettings(true)} />

      <main className="flex-1 overflow-y-auto bg-slate-50 px-5 pt-3 pb-5">
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
