import NavigationBar from "./navigationbar";
import Image from "next/image";
import {Fredoka} from "next/font/google"

const fredoka = Fredoka({
  subsets: ["latin"],
});

interface SidebarProps{
    onOpenSettings: ()=> void;
}

export default function Sidebar({onOpenSettings}:SidebarProps) {
    return (
      <aside
        className="w-72 h-screen sticky top-0 flex flex-col bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
      >
        <div className="flex items-center justify-center gap-1 mr-17 mt-3">
          <Image src="/logoblack.png" alt="Logo" width={45} height={45} />
          <h1
            className={`${fredoka.className} text-2xl font-bold text-indigo-600 dark:text-white transition-colors duration-300`}
          >
            Mind Space
          </h1>
        </div>
        <NavigationBar onOpenSettings={onOpenSettings} />
      </aside>
    );
}
