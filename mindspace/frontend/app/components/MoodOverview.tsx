"use client";
import MoodPie from "./MoodPie";

export default function MoodOverview(){
    return(
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">

        {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-zinc-900">
                Mood Overview
                </h2>

                <button className="text-sm font-medium text-zinc-600 hover:text-indigo-600">
                This Week ▼
                </button>
            </div>

        {/* Chart + Legend */}
            <div className="flex items-center justify-between gap-4">

                <MoodPie />

                <div className="space-y-4">

                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <p className="text-sm text-zinc-600">Happy</p>
                    </div>

                    <span className="text-sm font-medium text-zinc-500">
                    52%
                    </span>
                </div>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-300"></span>
                    <p className="text-sm text-zinc-600">Calm</p>
                    </div>

                    <span className="text-sm font-medium text-zinc-500">
                    25%
                    </span>
                </div>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                    <p className="text-sm text-zinc-600">Anxious</p>
                    </div>

                    <span className="text-sm font-medium text-zinc-500">
                    10%
                    </span>
                </div>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                    <p className="text-sm text-zinc-600">Sad</p>
                    </div>

                    <span className="text-sm font-medium text-zinc-500">
                    13%
                    </span>
                </div>

                </div>

            </div>

            {/* Encouragement Card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 p-4">

                <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                    💜
                </div>

                <div>

                    <h3 className="font-semibold text-zinc-900">
                    You're doing great!
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                    Keep writing, keep growing. ✨
                    </p>

                </div>

                </div>

            </div>

    </section>
    );
}