"use client";

import { useState } from 'react';
import SettingCard from './ui/SettingCard';
import SettingSection from './ui/SettingSection';
import SettingToggle from './ui/SettingToggle';
import SettingSelect from './ui/SettingSelect';

export default function NotificationSettings() {
    const [enableNotifications, setEnableNotifications] = useState(true);
    const [notificationSound, setNotificationSound] = useState(true);
    const [desktopNotifications, setDesktopNotifications] = useState(true);
    const [journalReminder, setJournalReminder] = useState(true);
    const [reminderTime, setReminderTime] = useState("8:00 PM");
    const [weeklyReflection, setWeeklyReflection] = useState(true);
    const [friendRequests, setFriendRequests] = useState(true);
    const [friendAccepted, setFriendAccepted] = useState(true);
    const [newMessages, setNewMessages] = useState(true);
    const [communityLikes, setCommunityLikes] = useState(true);
    const [comments, setComments] = useState(true);
    const [moodReminder, setMoodReminder] = useState(true);
    const [moodReminderTime, setMoodReminderTime] = useState("9:00 PM");
    const [aiTips, setAiTips] = useState(false);
    const [quietHours, setQuietHours] = useState(false);
    const [quietStart, setQuietStart] = useState("10:00 PM");
    const [quietEnd, setQuietEnd] = useState("7:00 AM");

  return(
    <form className="space-y-8">
        {/* Header */}
        <div>

            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Notifications
            </h1>

            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Manage how and when MindSpace sends you notifications.
            </p>

        </div>

        {/* Notification Settings */}
        <SettingCard>

            <SettingSection
            title="General"
            description="Manage your notification preferences."
            >

            <div className="space-y-4">

                <SettingToggle
                title="Enable Notifications"
                description="Receive notifications from MindSpace."
                checked={enableNotifications}
                onChange={setEnableNotifications}
                />

                <SettingToggle
                title="Notification Sound"
                description="Play a sound when a notification arrives."
                checked={notificationSound}
                onChange={setNotificationSound}
                />

                <SettingToggle
                title="Desktop Notifications"
                description="Allow browser notifications."
                checked={desktopNotifications}
                onChange={setDesktopNotifications}
                />

            </div>

            </SettingSection>

         </SettingCard>

        {/* Journal Reminder */}
        <SettingCard>

            <SettingSection
                title="Journal"
                description="Stay consistent with your journaling habits."
            >

                <div className="space-y-5">

                <SettingToggle
                    title="Daily Journal Reminder"
                    description="Receive a reminder to write in your journal."
                    checked={journalReminder}
                    onChange={setJournalReminder}
                />

                {journalReminder && (
                    <SettingSelect
                        label="Reminder Time"
                        value={reminderTime}
                        onChange={(e) => setReminderTime(e.target.value)}
                        options={[
                        "12:00 AM",
                        "1:00 AM",
                        "2:00 AM",
                        "3:00 AM",
                        "4:00 AM",
                        "5:00 AM",
                        "6:00 AM",
                        "7:00 AM",
                        "8:00 AM",
                        "9:00 AM",
                        "10:00 AM",
                        "11:00 AM",
                        "12:00 PM",
                        "1:00 PM",
                        "2:00 PM",
                        "3:00 PM",
                        "4:00 PM",
                        "5:00 PM",
                        "6:00 PM",
                        "7:00 PM",
                        "8:00 PM",
                        "9:00 PM",
                        "10:00 PM",
                        "11:00 PM",
                        ]}
                    />
                )}

                <SettingToggle
                    title="Weekly Reflection"
                    description="Receive a weekly summary and reflection reminder every Sunday."
                    checked={weeklyReflection}
                    onChange={setWeeklyReflection}
                />

                </div>

            </SettingSection>

        </SettingCard>

        {/* Social Notifications */}
        <SettingCard>

            <SettingSection
                title="Social"
                description="Choose which social activities notify you."
            >

                <div className="space-y-4">

                <SettingToggle
                    title="Friend Requests"
                    description="Notify me when someone sends a friend request."
                    checked={friendRequests}
                    onChange={setFriendRequests}
                />

                <SettingToggle
                    title="Friend Accepted"
                    description="Notify me when someone accepts my friend request."
                    checked={friendAccepted}
                    onChange={setFriendAccepted}
                />

                <SettingToggle
                    title="New Messages"
                    description="Receive notifications for new chat messages."
                    checked={newMessages}
                    onChange={setNewMessages}
                />

                <SettingToggle
                    title="Community Likes"
                    description="Notify me when someone likes my community post."
                    checked={communityLikes}
                    onChange={setCommunityLikes}
                />

                <SettingToggle
                    title="Comments"
                    description="Notify me when someone comments on my post."
                    checked={comments}
                    onChange={setComments}
                />

                </div>

            </SettingSection>

        </SettingCard>

        {/* Mood Reminder */}
        <SettingCard>

            <SettingSection
                title="Wellness"
                description="Stay mindful while minimizing unnecessary distractions."
            >

                <div className="space-y-5">

                <SettingToggle
                    title="Mood Check-in Reminder"
                    description="Receive reminders to log your mood."
                    checked={moodReminder}
                    onChange={setMoodReminder}
                />

                {moodReminder && (
                    <SettingSelect
                    label="Check-in Time"
                    value={moodReminderTime}
                    onChange={(e) => setMoodReminderTime(e.target.value)}
                    options={[
                        "7:00 AM",
                        "8:00 AM",
                        "9:00 AM",
                        "12:00 PM",
                        "3:00 PM",
                        "6:00 PM",
                        "8:00 PM",
                        "9:00 PM",
                        "10:00 PM",
                    ]}
                    />
                )}

                <SettingToggle
                    title="AI Wellness Tips"
                    description="Receive occasional AI-powered wellness suggestions."
                    checked={aiTips}
                    onChange={setAiTips}
                />

                <SettingToggle
                    title="Quiet Hours"
                    description="Silence non-urgent notifications during selected hours."
                    checked={quietHours}
                    onChange={setQuietHours}
                />

                {quietHours && (
                    <div className="grid grid-cols-2 gap-5">

                    <SettingSelect
                        label="Start Time"
                        value={quietStart}
                        onChange={(e) => setQuietStart(e.target.value)}
                        options={[
                        "8:00 PM",
                        "9:00 PM",
                        "10:00 PM",
                        "11:00 PM",
                        "12:00 AM",
                        ]}
                    />

                    <SettingSelect
                        label="End Time"
                        value={quietEnd}
                        onChange={(e) => setQuietEnd(e.target.value)}
                        options={[
                        "5:00 AM",
                        "6:00 AM",
                        "7:00 AM",
                        "8:00 AM",
                        "9:00 AM",
                        ]}
                    />

                    </div>
                )}

                </div>

            </SettingSection>

        </SettingCard>

    </form>
  );
}