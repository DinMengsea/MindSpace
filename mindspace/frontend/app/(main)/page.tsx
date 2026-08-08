"use client";

import MoodCheckIn from "../components/MoodCheckin";
import TodaysMood from "../components/TodaysMood";
import QuickActions from "../components/QuickActions";
import Header from "../components/header";

export default function Home() {
  return (
    <main
      className="
        min-h-full
        bg-zinc-50
        px-5
        py-6
        dark:bg-zinc-950
        lg:px-8
        lg:py-8
      "
    >

      <div className="mx-auto w-full max-w-[1500px]">

        <Header/>


        {/* Mood section */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">

          <MoodCheckIn />

          <TodaysMood />

        </div>


        {/* Quick Actions */}

        <QuickActions />

      </div>

    </main>
  );
}