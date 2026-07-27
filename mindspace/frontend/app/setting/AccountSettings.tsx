"use client";

import { Camera, BadgeCheck } from "lucide-react";
import { useState } from "react";
import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import SettingInput from "./ui/SettingInput";
import SettingButton from "./ui/SettingButton";

export default function AccountSettings() {
  const [bio, setBio] = useState("");
  return (
    <form className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
          Account
        </h1>

        <p className="mt-2 text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          Manage your profile and personal information.
        </p>
      </div>

      {/* Top Layout */}
      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        {/* ================= Profile ================= */}

        <SettingCard>
          <SettingSection title="Profile" description="Your public profile.">
            <div className="flex flex-col items-center">
              <label className="group relative cursor-pointer">
                <input type="file" accept="image/*" className="hidden" />

                <div
                  className="
                      flex
                      h-32
                      w-32
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-full

                      bg-indigo-100
                      dark:bg-zinc-800

                      text-5xl
                      font-bold

                      text-indigo-600
                      dark:text-white

                      transition-colors
                      duration-300
                    "
                >
                  D
                </div>

                <div
                  className="
                      absolute
                      inset-0

                      flex
                      flex-col
                      items-center
                      justify-center

                      rounded-full

                      bg-black/50

                      opacity-0
                      transition
                      group-hover:opacity-100
                    "
                >
                  <Camera size={24} className="text-white" />

                  <span className="mt-2 text-xs font-medium text-white">
                    Change
                  </span>
                </div>
              </label>

              <h2 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                Davath Pechlika
              </h2>

              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Applied Mathematics Student
              </p>

              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                sealika@gmail.com
              </p>

              <div
                className="
                    mt-6
                    w-full

                    border-t
                    border-zinc-200
                    dark:border-zinc-800

                    pt-5
                  "
              >
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Bio
                </h4>

                <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {bio || "No bio yet."}
                </p>
              </div>
            </div>
          </SettingSection>
        </SettingCard>

        {/* ================= Personal Information ================= */}

        <SettingCard>
          <SettingSection
            title="Personal Information"
            description="Update your personal details."
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <SettingInput label="Full Name" placeholder="Davath Pechlika" />

              <SettingInput label="Username" placeholder="SeaLika" />

              <SettingInput
                label="Email"
                type="email"
                placeholder="sealika@gmail.com"
              />

              <SettingInput label="Phone Number" placeholder="+855..." />

              {/* Bio */}
              <div className="space-y-2 md:col-span-2">
                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  Bio
                </label>

                <textarea
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  maxLength={150}
                  placeholder="Tell us a little about yourself..."
                  className="
                    w-full
                    min-h-[180px]

                    rounded-xl

                    border
                    border-zinc-300
                    dark:border-zinc-700

                    bg-white
                    dark:bg-zinc-900

                    p-4

                    text-sm
                    text-zinc-700
                    dark:text-white

                    placeholder:text-zinc-400
                    dark:placeholder:text-zinc-500

                    outline-none

                    resize-none

                    transition-all
                    duration-300

                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-100

                    dark:focus:border-white
                    dark:focus:ring-zinc-700
                  "
                />

                <div className="flex justify-between">
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Tell others about yourself.
                  </p>

                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {bio.length}/150
                  </p>
                </div>
              </div>
            </div>
          </SettingSection>
        </SettingCard>
      </div>

      {/* ================= Account Information ================= */}

      {/* ================= Account Information ================= */}

      <SettingCard>
        <SettingSection
          title="Account Information"
          description="General information about your account."
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Member Since */}
            <div
              className="
          rounded-2xl
          bg-zinc-50
          dark:bg-zinc-800

          p-5

          transition-colors
          duration-300
        "
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Member Since
              </p>

              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-white">
                July 2026
              </h3>
            </div>

            {/* Email Status */}
            <div
              className="
          rounded-2xl
          bg-zinc-50
          dark:bg-zinc-800

          p-5

          transition-colors
          duration-300
        "
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Email Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <BadgeCheck size={18} className="text-emerald-500" />

                <span className="font-semibold text-emerald-500">Verified</span>
              </div>
            </div>

            {/* Account ID */}
            <div
              className="
          rounded-2xl
          bg-zinc-50
          dark:bg-zinc-800

          p-5

          transition-colors
          duration-300
        "
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Account ID
              </p>

              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-white">
                MS-00001
              </h3>
            </div>
          </div>
        </SettingSection>
      </SettingCard>

      {/* ================= Footer ================= */}

      <div
        className="
    sticky
    bottom-0

    flex
    justify-end
    gap-3

    border-t
    border-zinc-200
    dark:border-zinc-800

    bg-white/80
    dark:bg-zinc-900/80

    px-1
    py-4

    backdrop-blur
  "
      >
        <SettingButton type="button" variant="secondary">
          Cancel
        </SettingButton>

        <SettingButton type="submit">Save Changes</SettingButton>
      </div>
    </form>
  );
}
