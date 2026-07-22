"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SettingSidebar from "./SettingSidebar";
import { motion } from "framer-motion";

interface SettingModalProps{
    onClose: ()=> void;
}



export default function SettingsModal({onClose}: SettingModalProps) {
    const [activeTab, setActiveTab] = useState("account");

    return (

        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

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
            className="h-[85vh] w-[85vw] rounded-3xl bg-white shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-8 py-6">

                <div>
                    <h1 className="text-3xl font-bold text-zinc-900">
                    Settings
                    </h1>

                    <p className="mt-1 text-sm text-zinc-500">
                    Manage your account and personalize MindSpace
                    </p>
                </div>

                <button onClick={onClose} 
                        className="rounded-xl p-2 transition hover:bg-zinc-100">
                        <X size={24} />
                </button>

            </div>

            {/* Body */}
            <div className="grid h-[calc(85vh-96px)] grid-cols-[280px_1fr]">

                {/* Sidebar */}
                <SettingSidebar 
                    activeTab= {activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* Main Content */}
                <main className="overflow-y-auto p-8">
                    {activeTab === "account" && <div>Account Settings</div>}

                    {activeTab === "appearance" && <div>Appearance Settings</div>}

                    {activeTab === "journal" && <div>Journal Settings</div>}

                    {activeTab === "notification" && <div>Notification Settings</div>}

                    {activeTab === "privacy" && <div>Privacy Settings</div>}

                    {activeTab === "security" && <div>Security Settings</div>}

                    {activeTab === "about" && <div>About MindSpace</div>}
                </main>

            </div>

        </motion.div>

    </motion.div>
  );
}