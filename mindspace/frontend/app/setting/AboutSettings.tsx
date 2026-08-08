"use client";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import { ChevronRight } from "lucide-react";

interface AboutItemProps {
  title: string;
  subtitle?: string;
}

function AboutItem({ title, subtitle }: AboutItemProps) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-between

        rounded-2xl

        border
        border-zinc-200
        dark:border-zinc-700

        bg-white
        dark:bg-zinc-900

        p-5

        transition

        hover:border-indigo-300
        hover:bg-zinc-50

        dark:hover:bg-zinc-800
      "
    >
      <div className="text-left">

        <h3 className="font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        )}

      </div>

      <ChevronRight
        className="text-zinc-400"
        size={20}
      />
    </button>
  );
}

export default function AboutSettings() {
    return (
        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                About MindSpace
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                Learn more about MindSpace and access helpful resources.
                </p>

            </div>

            {/* Application card */}
            
            <SettingCard>

                <SettingSection
                    title="Application"
                    description="Current application information."
                >

                    <div className="space-y-4">

                    <AboutItem
                        title="Version"
                        subtitle="v1.0.0"
                    />

                    <AboutItem
                        title="Build"
                        subtitle="2026.08"
                    />

                    <AboutItem
                        title="Developer"
                        subtitle="MindSpace Team"
                    />

                    </div>

                </SettingSection>
            </SettingCard>

            {/* Resources card */}

            <SettingCard>

                <SettingSection
                    title="Resources"
                    description="Legal information and documentation."
                >

                    <div className="space-y-4">

                    <AboutItem title="Privacy Policy" />

                    <AboutItem title="Terms of Service" />

                    <AboutItem title="Open Source Licenses" />

                    </div>

                </SettingSection>
            </SettingCard>

            {/* Support card */}

            <SettingCard>

                <SettingSection
                    title="Support"
                    description="Need help? We're here for you."
                >

                    <div className="space-y-4">

                    <AboutItem title="Contact Support" />

                    <AboutItem title="Report a Bug" />

                    <AboutItem title="Request a Feature" />

                    </div>

                </SettingSection>
            </SettingCard>

            {/* Footer */}
            <div className="pb-6 text-center">

            <p className="text-zinc-500 dark:text-zinc-400">
                Thank you for using MindSpace
            </p>
            </div>
        </div>
    );
}