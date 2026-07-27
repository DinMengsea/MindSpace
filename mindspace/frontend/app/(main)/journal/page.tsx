"use client";

import Header from "@/app/components/header";
import HeroBanner from "@/app/components/HeroBanner";
import Calendar from "@/app/components/Calendar";
import StatsSection from "@/app/components/StatsSection";
import RecentEntries from "@/app/components/RecentEntries";
import MoodOverview from "@/app/components/MoodOverview";

import { useAppSetting } from "@/app/components/provider/AppSettingProvider";

export default function Journal() {
  const { fontSize } = useAppSetting();

  const fontClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div
      className={`
        flex
        flex-1
        flex-col
        font-sans

        bg-zinc-50
        dark:bg-zinc-950

        transition-colors
        duration-300

        ${fontClasses[fontSize]}
      `}
    >
      <main className="w-full px-5">
        <Header />

        <div className="mt-3">
          <div className="grid grid-cols-[1fr_380px] items-start gap-6">

            {/* Left */}
            <div className="space-y-3">
              <HeroBanner />
              <StatsSection />
              <RecentEntries />
            </div>

            {/* Right */}
            <div className="space-y-5">
              <Calendar />
              <MoodOverview />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}