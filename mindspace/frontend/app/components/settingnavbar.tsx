import Link from "next/link";
import { ShieldCogCorner, User, Users, BellDot, GlobeLock, Palette, Info, Library, Power } from "lucide-react";

export default function SettingNavbar(){
     return (
        <nav className="">
            <div className="flex flex-col gap-1 mt-7 ml-3 mr-3 justify-space-between text-gray-500">
                <Link href="/setting/AccountSetting" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <User size={30}/>Account
                </Link>
                <Link href="/setting/SecuritySetting" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <ShieldCogCorner size={30}/>Security
                </Link>
                <Link href="/setting/NotificationSetting" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <BellDot size={30}/>Notification
                </Link>
                <Link href="/setting/PrivacySetting" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <GlobeLock size={30}/>Privacy Settings
                </Link>
                <Link href="/setting/ApparenceSetting" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Palette size={30}/>Apparence
                </Link>
                <Link href="/setting/Aboutus" className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                    <Info size={30}/>About us
                </Link>
                <div className="flex flex-col gap-1 mt-85 justify-space-between">
                    <button className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-[#EEF2FF] hover:text-indigo-400">
                        <Power size={30}/>Logout
                    </button>   
                </div>
            </div>
        </nav>
     );
}