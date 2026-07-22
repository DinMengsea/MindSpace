import Link from "next/link";
import { Bell, MessageCircleMore } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-3">

      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-zinc-900">
          Good morning, <span className="text-indigo-600">MindSpace!</span>
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Ready to capture today's thoughts?
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="rounded-xl p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-indigo-600">
          <Bell size={20} />
        </button>

        <button className="rounded-xl p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-indigo-600">
          <MessageCircleMore size={20} />
        </button>

        <Link
          href="/login"
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Login
        </Link>

      </div>

    </header>
  );
}