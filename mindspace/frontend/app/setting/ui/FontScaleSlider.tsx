"use client";

interface FontScaleSliderProps{
    value: number;
    onChange: ( value: number) => void;
}

export default function FontScaleSlider({value,onChange}:FontScaleSliderProps){
    return(
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Super Small
                </span>

                <span className="text-sm font semibold text-zinc-700 dark:text-zinc-200">
                    {value}%
                </span>

                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    Super Large
                </span>
            </div>

            <input 
                type="range"
                min={80}
                max={120}
                step={5}
                value={value}
                onChange={(e)=> onChange(Number(e.target.value))}
                className="w-full acccent-indigo-600"
            />
        </div>
    );
}