import Link from "next/link";
import { Bell, MessageCircleMore } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-3 transition-colors duration-300">

      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
          Good morning, <span className="text-indigo-600 dark:text-white">MindSpace!</span>
        </h1>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Ready to capture today's thoughts?
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button
          className="
            rounded-xl
            p-2
            text-zinc-500
            dark:text-zinc-400
            transition-all
            duration-300
            hover:bg-zinc-100
            dark:hover:bg-zinc-800
            hover:text-indigo-600
            dark:hover:text-indigo-400
          "
        >
          <Bell size={20} />
        </button>

        <button
          className="
            rounded-xl
            p-2
            text-zinc-500
            dark:text-zinc-400
            transition-all
            duration-300
            hover:bg-zinc-100
            dark:hover:bg-zinc-800
            hover:text-indigo-600
            dark:hover:text-indigo-400
          "
        >
          <MessageCircleMore size={20} />
        </button>

        <Link
          href="/login"
          className="
            rounded-xl
            bg-indigo-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-indigo-700
          "
        >
          Login
        </Link>

      </div>

    </header>
  );
}