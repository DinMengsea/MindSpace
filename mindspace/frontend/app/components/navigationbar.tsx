import Link from "next/link";
import { House, User, Users, Bot, Notebook, Activity, ChartColumn, Library, HeartPlus, Settings } from "lucide-react";

export default function NavigationBar(){
     return (
        <nav className="">
            <div className="flex flex-col gap-1 mt-7 ml-3 mr-3 justify-space-between text-gray-500">
                <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <House size={30}/>Home
                </Link>
                <Link href="/aicompanion" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Bot size={30}/>AI Companion
                </Link>
                <Link href="/community" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Users size={30}/>Community
                </Link>
                <Link href="/journal" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Notebook size={30}/>Journal
                </Link>
                <Link href="/moodtracker" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Activity size={30}/>Mood Tracker
                </Link>
                <Link href="/analysis" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <ChartColumn size={30}/>Analysis
                </Link>
                <Link href="/resource" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Library size={30}/>Resources
                </Link>
                <div className="flex flex-col gap-1 mt-60 justify-space-between">
                    <Link href="/support" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                        <HeartPlus size={30}/>Support
                    </Link>
                    <Link href="/setting" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                        <Settings size={30}/>Settings
                    </Link>   
                </div>
            </div>

        </nav>
     );
}