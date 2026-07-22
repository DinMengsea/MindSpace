import Link from "next/link";
import { House, User, Users, Bot, Notebook, Activity, ChartColumn, Library, HeartPlus, Settings } from "lucide-react";

interface NavigationBarProp{
    onOpenSettings: ()=> void;
}

export default function NavigationBar({onOpenSettings}:NavigationBarProp){
     return (
        <nav className="flex h-full flex-col text-gray-500">

            {/* Top navigation*/}

            <div className="flex flex-col gap-1 mt-7 ml-3 mr-3 justify-space-between text-gray-500">
                <Link href="/" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <House size={20}/>Home
                </Link>
                <Link href="/aicompanion" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Bot size={20}/>AI Companion
                </Link>
                <Link href="/community" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Users size={20}/>Community
                </Link>
                <Link href="/journal" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Notebook size={20}/>Journal
                </Link>
                <Link href="/moodtracker" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Activity size={20}/>Mood Tracker
                </Link>
                <Link href="/analysis" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <ChartColumn size={20}/>Analysis
                </Link>
                <Link href="/resource" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Library size={20}/>Resources
                </Link>
            </div>

                {/* Bottom navigation*/}

             <div className="mt-auto mb-8 mx-3 flex flex-col gap-1">
                <Link href="/support" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <HeartPlus size={20}/>Support
                </Link>
                <button onClick={onOpenSettings} className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Settings size={20}/>Settings
                </button>   
            </div>

        </nav>
     );
}