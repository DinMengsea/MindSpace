import Header from "@/app/components/header";
import HeroBanner from "@/app/components/HeroBanner";
import Calendar from "@/app/components/Calendar";
import StatsSection from "@/app/components/StatsSection";
import RecentEntries from "@/app/components/RecentEntries";
import MoodOverview from "@/app/components/MoodOverview";

export default function Journal() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans">
      <main className="w-full px-5">
        <Header />

        <div>
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
              <MoodOverview/>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}