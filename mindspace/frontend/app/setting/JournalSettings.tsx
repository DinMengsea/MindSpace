"use client";
import { useState } from "react";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import SettingToggle from "./ui/SettingToggle";
import SettingSelect from "./ui/SettingSelect";
import WrittingWidthSlider from "./ui/WrittingWidthSlider";
export default function JournalSettings(){

    const [autoSave,setAutoSave] = useState<boolean>(true)
    const [defaultMood, setDefaultMood] = useState("😊 Happy")
    const [reminder, setReminder] = useState("Daily")
    const [writingWidth, setWritingWidth] = useState(70);
    const [showWordCount, setShowWordCount] = useState<boolean>(true);
    const [showReadingTime, setShowReadingTime] = useState<boolean>(true);
    const [enableMarkdown, setEnableMarkdown] = useState<boolean>(false);
    const [lockJournal, setLockJournal] = useState<boolean>(false);
    const [hideJournal, setHideJournal] = useState<boolean>(true);
    const [encryptJournal, setEncryptJournal] = useState<boolean>(false);


    return(
        <form className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    Journal
                </h1>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Personalize your writting experience and journal preference
                </p>
            </div>

            {/* Writting */}
            <SettingCard>
                <SettingSection
                    title="Writting"
                    description="Customize how you write journal"
                >
                    <div className="space-y-4">
                        <SettingToggle
                            title="Auto Save"
                            description="Automatically save while typing."
                            checked={autoSave}
                            onChange={setAutoSave}
                        />


                        <SettingSelect
                            label="Default Mood"
                            value={defaultMood}
                            onChange={(e)=> setDefaultMood(e.target.value)}
                            options={[
                                "😊 Happy",
                                "😌 Calm",
                                "😐 Neutral",
                                "😔 Sad",
                                "😡 Angry",
                                "😰 Anxious",
                            ]}
                        />

                        <SettingSelect
                            label="Writting Reminder"
                            value={reminder}
                            onChange={(e)=>setReminder(e.target.value)}
                            options={[
                                "Never",
                                "Daily",
                                "Weekdays",
                                "Weekends",
                            ]}
                        />

                    </div>

                </SettingSection>
            </SettingCard>

            <SettingCard>
                <SettingSection
                    title="Editor"
                    description="Customize your writting workspace"
                >
                    <div className="space-y-6">
                        <label className="mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Writing Width
                        </label>
                    <WrittingWidthSlider
                        value={writingWidth}
                        onChange={setWritingWidth}
                        />
                    </div>
                    
                    <SettingToggle 
                        title="Show Word Count"
                        description="Display total words while writting"
                        checked={showWordCount}
                        onChange={setShowWordCount}
                    />

                    <SettingToggle 
                        title="Show Reading Time"
                        description="Estimate reading time for each journal"
                        checked={showReadingTime}
                        onChange={setShowReadingTime}
                    />

                    <SettingToggle 
                        title="Enable Markdown"
                        description="Write journal entries using Markdown."
                        checked={enableMarkdown}
                        onChange={setEnableMarkdown}
                    />

                </SettingSection>
            </SettingCard>

            {/* Privacy */}

            <SettingCard>
                <SettingSection
                    title="Privacy"
                    description="Protect your journal and personal thoughts"
                >
                    <div className="space-y-6">
                        <SettingToggle
                            title="Lock Journal"
                            description="Require autheication before opening your journal"
                            checked={lockJournal}
                            onChange={setLockJournal}
                        />

                        <SettingToggle
                            title="Hide Journal From Profile"
                            description="Keep all journal entires completely private"
                            checked={hideJournal}
                            onChange={setHideJournal}
                        />

                        <SettingToggle
                            title="End-to-End Encryption"
                            description="Encrypt future journal entries for additional security"
                            checked={encryptJournal}
                            onChange={setEncryptJournal}
                        />
                    </div>

                </SettingSection>
            </SettingCard>

        </form>
    );
}