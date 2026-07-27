"use client";

import { option } from "framer-motion/client";

interface FontSelectorProps{
    value: "small" | "medium"| "large";
    onChange: (value: "small" | "medium"| "large") => void;
}

const options =[
    {id: "small", label: "Small"},
    {id: "medium", label : "Medium"},
    {id: "large", label : "Large"}
] as const;

export default function FontSelector({value, onChange}:FontSelectorProps){
    return(
        <div className="flex items-center gap-4">
            {options.map((option)=>(
                <button
                    key={option.id}
                    type="button"
                    onClick={()=>onChange(option.id)}
                    className={`rounded-xl border px-6 py-3 text-sm font-medium transition-all
                    ${value === option.id? "border-indigo-500 bg-indigo-50 text-indigo-600": "border-zinc-200 bg-white text-zinc-600 hover:border-indigo-300 hover:bg-zinc-50"}        
                    `}
                
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}