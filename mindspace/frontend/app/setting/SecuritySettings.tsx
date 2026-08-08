"use client";

import { useState } from "react";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import SettingInput from "./ui/SettingInput";
import SettingButton from "./ui/SettingButton";
import SettingToggle from "./ui/SettingToggle";
import SettingSelect from "./ui/SettingSelect";


export default function SecuritySettings() {

    const sessions = [
    {
        id: 1,
        device: "Windows 11",
        browser: "Chrome",
        location: "Phnom Penh, Cambodia",
        current: true,
        lastActive: "Active Now",
    },
    {
        id: 2,
        device: "MacBook Pro",
        browser: "Safari",
        location: "Battambang, Cambodia",
        current: false,
        lastActive: "Yesterday",
    },
    {
        id: 3,
        device: "iPhone 15",
        browser: "Safari",
        location: "Phnom Penh, Cambodia",
        current: false,
        lastActive: "2 days ago",
    },
    ];
    const [twoFactor, setTwoFactor] = useState(false);
    const [twoFactorMethod, setTwoFactorMethod] = useState("Email Verification");

    return (
        <form className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Security
                </h1>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Protect your account and manage your security settings.
                </p>
            </div>

            {/* Password */}

            <SettingCard>

                <SettingSection
                    title="Password"
                    description="Update your account password."
                >

                    <div className="space-y-5">

                    <SettingInput
                        label="Current Password"
                        type="password"
                    />

                    <SettingInput
                        label="New Password"
                        type="password"
                    />

                    <SettingInput
                        label="Confirm Password"
                        type="password"
                    />

                    <div className="flex justify-end">

                        <SettingButton>
                        Update Password
                        </SettingButton>

                    </div>

                    </div>
                </SettingSection>
            </SettingCard>
        

            {/* Two-Factor Authentication */}

            <SettingCard>

                <SettingSection
                    title="Two-Factor Authentication"
                    description="Add an extra layer of protection to your account."
                >

                    <div className="space-y-5">

                    <SettingToggle
                        title="Enable Two-Factor Authentication"
                        description="Require a verification code when signing in."
                        checked={twoFactor}
                        onChange={setTwoFactor}
                    />

                    {twoFactor && (
                        <>
                        <SettingSelect
                            label="Verification Method"
                            value={twoFactorMethod}
                            onChange={(e) =>
                            setTwoFactorMethod(e.target.value)
                            }
                            options={[
                            "Email Verification",
                            "Authenticator App",
                            ]}
                        />

                        <div className="flex justify-end">

                            <SettingButton>
                            Generate Recovery Codes
                            </SettingButton>

                        </div>

                        </>
                    )}
                    </div>

                </SettingSection>
            </SettingCard>


            {/* Active Sessions */}

            <SettingCard>

                <SettingSection
                    title="Login Sessions"
                    description="Manage devices currently signed into your account."
                >

                    <div className="space-y-4">

                    {sessions.map((session) => (

                        <div
                        key={session.id}
                        className="
                            flex
                            items-center
                            justify-between

                            rounded-2xl

                            border
                            border-zinc-200
                            dark:border-zinc-700

                            bg-zinc-50
                            dark:bg-zinc-800

                            p-5
                        "
                        >

                        <div>

                            <h3 className="font-semibold text-zinc-900 dark:text-white">
                            {session.device}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {session.browser} • {session.location}
                            </p>

                        </div>

                        <div className="text-right">

                            {session.current ? (

                            <span
                                className="
                                rounded-full

                                bg-emerald-100
                                dark:bg-emerald-900

                                px-3
                                py-1

                                text-xs
                                font-semibold

                                text-emerald-700
                                dark:text-emerald-300
                                "
                            >
                                Active Now
                            </span>

                            ) : (

                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {session.lastActive}
                            </p>

                            )}

                        </div>

                        </div>

                    ))}

                    <div className="flex justify-end">

                        <SettingButton variant="secondary">
                        Sign Out Other Devices
                        </SettingButton>

                    </div>

                    </div>

                </SettingSection>
            </SettingCard>


            {/* Danger zone */}

            <SettingCard
                className="
                    border-red-200
                    bg-red-50

                    dark:border-red-900
                    dark:bg-red-950/30
                "
                >

                <SettingSection
                    title="Danger Zone"
                    description="Permanent actions that cannot be undone."
                >

                    <div
                    className="
                        flex
                        items-center
                        justify-between

                        rounded-2xl

                        border
                        border-red-200
                        dark:border-red-900

                        bg-white
                        dark:bg-zinc-900

                        p-6
                    "
                    >

                    <div>

                        <h3 className="font-semibold text-red-600 dark:text-red-400">
                        Delete Account
                        </h3>

                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Permanently delete your account, journals,
                        friends, chats, and all associated data.
                        </p>

                    </div>

                    <SettingButton variant="danger">
                        Delete Account
                    </SettingButton>

                    </div>

                </SettingSection>
            </SettingCard>
        </form>
    );
}