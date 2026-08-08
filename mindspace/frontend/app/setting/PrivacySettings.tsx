"use client";

import { useState } from "react";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import SettingToggle from "./ui/SettingToggle";
import SettingSelect from "./ui/SettingSelect";

export default function PrivacySettings() {
    const [profileVisibility, setProfileVisibility] = useState("Friends Only");
    const [showEmail, setShowEmail] = useState(false);
    const [showBirthday, setShowBirthday] = useState(false);
    const [defaultJournalPrivacy, setDefaultJournalPrivacy] = useState("Private");
    const [allowAiAnalysis, setAllowAiAnalysis] = useState(true);
    const [hideJournalStats, setHideJournalStats] = useState(true);
    const [lockJournal, setLockJournal] = useState(false);
    const [friendRequestPermission, setFriendRequestPermission] = useState("Everyone");
    const [messagePermission, setMessagePermission] = useState("Friends Only");
    const [showOnlineStatus, setShowOnlineStatus] = useState(true);
    const [allowProfileSearch, setAllowProfileSearch] = useState(true);
    const [showMoodActivity, setShowMoodActivity] = useState(true);
    const [showAchievementBadges, setShowAchievementBadges] = useState(true);
    const [shareAnalytics, setShareAnalytics] = useState(false);

    return (
        <form className="space-y-8">
            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Privacy
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Manage who can see your information and interact with you.
                </p>
            </div>

            {/* Profile */}

            <SettingCard>
                <SettingSection
                title="Profile"
                description="Control the visibility of your profile."
                >
                <div className="space-y-5">
                    <SettingSelect
                    label="Profile Visibility"
                    value={profileVisibility}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                    options={["Public", "Friends Only", "Private"]}
                    />

                    <SettingToggle
                    title="Show Email Address"
                    description="Allow others to see your email."
                    checked={showEmail}
                    onChange={setShowEmail}
                    />

                    <SettingToggle
                    title="Show Birthday"
                    description="Display your birthday on your profile."
                    checked={showBirthday}
                    onChange={setShowBirthday}
                    />
                </div>
                </SettingSection>
            </SettingCard>

            {/* Journals */}

            <SettingCard>

                <SettingSection
                    title="Journal"
                    description="Control the privacy and protection of your journal entries."
                >

                    <div className="space-y-5">

                    <SettingSelect
                        label="Default Journal Privacy"
                        value={defaultJournalPrivacy}
                        onChange={(e) =>
                        setDefaultJournalPrivacy(e.target.value)
                        }
                        options={[
                        "Private",
                        "Friends Only",
                        "Public",
                        ]}
                    />

                    <SettingToggle
                        title="Allow AI Analysis"
                        description="Allow the AI Companion to analyze your journal entries and provide personalized insights."
                        checked={allowAiAnalysis}
                        onChange={setAllowAiAnalysis}
                    />

                    <SettingToggle
                        title="Hide Journal Statistics"
                        description="Hide your journal streak, word count, and activity from your profile."
                        checked={hideJournalStats}
                        onChange={setHideJournalStats}
                    />

                    <SettingToggle
                        title="Require Password Before Opening"
                        description="Ask for your password before opening your journal."
                        checked={lockJournal}
                        onChange={setLockJournal}
                    />

                    </div>

                </SettingSection>
            </SettingCard>

            {/* Community */}
            
            <SettingCard>

                <SettingSection
                    title="Community"
                    description="Manage how other people can find and interact with you."
                >

                    <div className="space-y-5">

                    <SettingSelect
                        label="Who Can Send Friend Requests"
                        value={friendRequestPermission}
                        onChange={(e) =>
                        setFriendRequestPermission(e.target.value)
                        }
                        options={[
                        "Everyone",
                        "Friends of Friends",
                        "No One",
                        ]}
                    />

                    <SettingSelect
                        label="Who Can Message You"
                        value={messagePermission}
                        onChange={(e) =>
                        setMessagePermission(e.target.value)
                        }
                        options={[
                        "Everyone",
                        "Friends Only",
                        "No One",
                        ]}
                    />

                    <SettingToggle
                        title="Show Online Status"
                        description="Let your friends know when you're online."
                        checked={showOnlineStatus}
                        onChange={setShowOnlineStatus}
                    />

                    <SettingToggle
                        title="Allow Profile Search"
                        description="Allow other users to find your profile using your name or username."
                        checked={allowProfileSearch}
                        onChange={setAllowProfileSearch}
                    />

                    </div>

                </SettingSection>

            </SettingCard>

            {/* Activity Visibility */}

            <SettingCard>

                <SettingSection
                    title="Activity"
                    description="Manage how your activity is shared across MindSpace."
                >

                    <div className="space-y-4">

                    <SettingToggle
                        title="Show Mood Activity"
                        description="Allow your friends to see your recent mood updates."
                        checked={showMoodActivity}
                        onChange={setShowMoodActivity}
                    />

                    <SettingToggle
                        title="Show Achievement Badges"
                        description="Display your journaling achievements and milestones on your profile."
                        checked={showAchievementBadges}
                        onChange={setShowAchievementBadges}
                    />

                    <SettingToggle
                        title="Share Anonymous Analytics"
                        description="Help improve MindSpace by anonymously sharing usage statistics."
                        checked={shareAnalytics}
                        onChange={setShareAnalytics}
                    />
                    </div>
                </SettingSection>
            </SettingCard>
        </form>
  );
}
