import NavigationBar from "./navigationbar";
import Image from "next/image";
import {Fredoka} from "next/font/google"

const fredoka = Fredoka({
  subsets: ["latin"],
});

export default function Sidebar() {
    return(
        <aside className="w-72 h-screen bg-white border-r border-zinc-200 flex flex-col sticky top-0">
            <div className="flex items-center justify-center gap-1 mr-17 mt-5">
                <Image src="/logoblack.png" alt="Logo" width={45} height={45}/>
                <h1 className={`${fredoka.className} text-indigo-400 text-2xl font-bold ml-0`}>Mind Space</h1>
            </div>
        <NavigationBar />
        </aside>
        
    );
}
