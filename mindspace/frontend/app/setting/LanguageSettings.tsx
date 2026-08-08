"use client";

import { useState } from "react";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import SettingSelect from "./ui/SettingSelect";
import SettingToggle from "./ui/SettingToggle";

export default function LanguageSettings() {
  const [language, setLanguage] = useState("English");

  const [region, setRegion] = useState("Cambodia");

  const [timezone, setTimezone] = useState("Asia/Phnom Penh");

  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

  const [timeFormat, setTimeFormat] = useState("24 Hour");

  const [translatePosts, setTranslatePosts] = useState(true);

  const [translateAI, setTranslateAI] = useState(true);

    return (
        <form className="space-y-8">

            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Language
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Customize language and regional preferences.
                </p>

            </div>

            {/* Language Settings */}

            <SettingCard>

                <SettingSection
                    title="Language"
                    description="Choose the language used throughout MindSpace."
                >

                    <SettingSelect
                    label="Application Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    options={[
                        "English",
                        "Khmer",
                        "Japanese",
                        "Chinese",
                    ]}
                    />

                </SettingSection>
            </SettingCard>

            {/* Regional Settings */}

            <SettingCard>

                <SettingSection
                    title="Region"
                    description="Customize your regional preferences."
                >

                    <div className="space-y-5">

                    <SettingSelect
                        label="Region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        options={[
                        "Cambodia",
                        "Vietnam",
                        "Malaysia",
                        ]}
                    />

                    <SettingSelect
                        label="Time Zone"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        options={[
                        "Asia/Phnom Penh",
                        "Asia/Tokyo",
                        "UTC",
                        ]}
                    />

                    <SettingSelect
                        label="Date Format"
                        value={dateFormat}
                        onChange={(e) => setDateFormat(e.target.value)}
                        options={[
                        "DD/MM/YYYY",
                        "MM/DD/YYYY",
                        "YYYY-MM-DD",
                        ]}
                    />

                    <SettingSelect
                        label="Time Format"
                        value={timeFormat}
                        onChange={(e) => setTimeFormat(e.target.value)}
                        options={[
                        "12 Hour",
                        "24 Hour",
                        ]}
                    />

                    </div>
                </SettingSection>
            </SettingCard>

            {/* Translation Settings */}

            <SettingCard>

                <SettingSection
                    title="Translation"
                    description="Control automatic translations inside MindSpace."
                >

                    <div className="space-y-4">

                    <SettingToggle
                        title="Translate Community Posts"
                        description="Automatically translate community posts into your selected language."
                        checked={translatePosts}
                        onChange={setTranslatePosts}
                    />

                    <SettingToggle
                        title="Translate AI Responses"
                        description="Automatically translate AI Companion responses."
                        checked={translateAI}
                        onChange={setTranslateAI}
                    />

                    </div>

                </SettingSection>
            </SettingCard>        
        </form>
    );
}