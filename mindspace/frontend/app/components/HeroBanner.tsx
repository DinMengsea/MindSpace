import Image from "next/image";
import { Pencil } from "lucide-react";

export default function HeroBanner() {
  return (
    <main className=" space-y-3">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-zinc-900">
          Journal
        </h1>

        <p className="mt-1 text-base text-zinc-500">
          A safe space to reflect, express, and grow.
        </p>
      </div>

      {/* Hero Banner */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-50 via-violet-50 to-purple-50 px-8 py-6">

        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="max-w-lg">

            <h2 className="text-3xl font-bold leading-tight text-indigo-600">
              Write your thoughts
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-zinc-500">
              Capture your emotions, memories, and reflections in your
              private journal. Every entry is another step toward
              understanding yourself.
            </p>

            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg">
              <Pencil size={18} />
              New Journal Entry
            </button>

          </div>

          {/* Right */}
          <div className="hidden lg:block">

            <Image
              src="/JournalBook.png"
              alt="Journal Illustration"
              width={280}
              height={210}
              priority
              className="drop-shadow-xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}