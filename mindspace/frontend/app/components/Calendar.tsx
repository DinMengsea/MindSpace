"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"

export default function Calendar(){
    return(
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">
                Calendar
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
                Keep track of your journal entires.
            </p>

            <div className="mt-6 flex justify-center">
                <DayPicker mode="single"
                           className="text-zinc-800"
                           classNames={{
                                month_caption: "flex items-center justify-between",
                                caption_label: "text-lg font-semibold",
                                button_previous: "rounded-full hover:bg-violet-100",
                                button_next: "rounded-full hover:bg-violet-100",
                                weekday: "text-zinc-400",
                                day: "rounded-full hover:bg-violet-100",
                                selected: "bg-violet-600 text-white",
                                today:  "text-violet-600 font-bold",
                           }}
                />
            </div>
        </div>
    );
}