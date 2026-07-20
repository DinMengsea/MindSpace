import Link from "next/link";
import {BellDot,Bell, LucideMessageCircleMore} from "lucide-react";

export default function Header() {
  return (
    <header className=" w-full flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4 justify-space-between">
        <h1 className="text-2xl font-bold text-indigo-400">
          Good morning, MindSpace!
        </h1>
      </div>

      {/* Right Side */}

     <div className="flex items-center gap-4">
        {/* Notification */}
        <button
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition">
            <Bell size={22} />
        </button>

        {/*Chat Bubble*/}

        <button
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition">
            <LucideMessageCircleMore size={22}/>
        </button>

        {/* Login */}

        <Link href="/login"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200 shadow-sm">
            Login
        </Link>
    </div>    
    </header>
  );
}