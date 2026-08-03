"use client";

interface WrittingWidthSliderProps{
    value: number;
    onChange: (value:number)=> void;
}

export default function WrittingWidthSlider({value,onChange}:WrittingWidthSliderProps){
    return(
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Narrow
                </span>

                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {value}%
                </span>

                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Wide
                </span>
            </div>
            <input
                type="range"
                min={50}
                max={100}
                step={5}
                value={value}
                onChange={(e)=>onChange(Number(e.target.value))}
                className="w-full accent-indigo-600 dark:accent-white"
            />
        </div>
    );
}