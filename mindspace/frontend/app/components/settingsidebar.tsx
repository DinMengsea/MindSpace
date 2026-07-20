import Link from "next/link";
import Image from "next/image";
import {Fredoka} from "next/font/google"
import SettingNavbar from "./settingnavbar";
import { ArrowBigLeft } from "lucide-react";
import Setting from "../setting/page";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export default function SettingSidebar() {
    return(
        <aside className="w-72 h-screen bg-white border-r border-zinc-200 flex flex-col sticky top-0">
            <div className="flex items-center justify-center gap-1 mr-17 mt-3">
                <Link href="/" className=" flex items-center pr-7 gap-2 rounded-full text-gray-500 hover:text-indigo-400 transition">
                    <ArrowBigLeft size={45}/>Back to Home
                </Link>
            </div>
        <SettingNavbar/>
        </aside>
        
    );
}
