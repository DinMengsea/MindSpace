"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

import SettingSidebar from "./SettingSidebar";

import AccountSettings from "../setting/AccountSettings";
import AppearanceSetting from "../setting/AppearanceSetting";

import type { SettingTab } from "../components/types";
import JournalSettings from "../setting/JournalSettings";
import NotificationSettings from "../setting/NotificationSettings";
import PrivacySettings from "../setting/PrivacySettings";
import SecuritySettings from "../setting/SecuritySettings";
import LanguageSettings from "../setting/LanguageSettings";
import AboutSettings from "../setting/AboutSettings";

interface SettingModalProps {
  onClose: () => void;
}

export default function SettingsModal({
  onClose,
}: SettingModalProps) {
  const [activeTab, setActiveTab] =
    useState<SettingTab>("account");

  const tabComponents: Record<SettingTab, React.ReactNode> = {
    account: <AccountSettings />,
    appearance: <AppearanceSetting />,
    journal: <JournalSettings/>,
    notification: <NotificationSettings/>,
    privacy: <PrivacySettings/>,
    security: <SecuritySettings/>,
    language: <LanguageSettings/>,
    about: <AboutSettings/>,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/40

        backdrop-blur-sm
      "
    >
      {/* Modal */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          flex
          h-[95vh]
          w-[95vw]
          max-w-7xl
          flex-col

          overflow-hidden

          rounded-3xl

          bg-white
          dark:bg-zinc-950

          shadow-2xl

          transition-colors
          duration-300
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-zinc-200
            dark:border-zinc-800

            px-6
            py-5
            lg:px-8
          "
        >
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Settings
            </h1>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Manage your account and personalize MindSpace
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2

              transition-all

              hover:bg-zinc-100
              dark:hover:bg-zinc-800
            "
          >
            <X className="text-zinc-700 dark:text-zinc-300" size={24} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            grid
            flex-1
            overflow-hidden

            grid-cols-[240px_1fr]
            lg:grid-cols-[300px_1fr]
          "
        >
          <SettingSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <main
            className="
              overflow-y-auto

              bg-zinc-50
              dark:bg-zinc-950

              p-6
              lg:p-8

              transition-colors
              duration-300
            "
          >
            {tabComponents[activeTab]}
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}