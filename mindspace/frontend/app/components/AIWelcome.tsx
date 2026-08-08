"use client";

import {Sparkles,Heart,BookOpen,Brain,} from "lucide-react";

interface AIWelcomeProps {
  onPromptClick?: (prompt: string) => void;
}

const prompts = [
  {
    icon: Heart,
    title: "I'm feeling stressed",
    prompt: "I'm feeling stressed today.",
  },
  {
    icon: Brain,
    title: "I need someone to talk to",
    prompt: "I need someone to talk to.",
  },
  {
    icon: BookOpen,
    title: "Help me reflect",
    prompt: "Help me reflect on my day.",
  },
  {
    icon: Sparkles,
    title: "Give me some motivation",
    prompt: "I need some motivation today.",
  },
];

export default function AIWelcome({
  onPromptClick,
}: AIWelcomeProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-10">

      <div className="w-full max-w-2xl text-center">

        {/* AI Icon */}

        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-indigo-100
            text-indigo-600

            dark:bg-zinc-800
            dark:text-indigo-400
          "
        >
          <Sparkles className="h-8 w-8" />
        </div>

        {/* Heading */}

        <h1
          className="
            mt-6
            text-3xl
            font-bold
            text-zinc-900

            dark:text-white
          "
        >
          Hi, I'm Mindy ✨
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-3
            max-w-lg
            text-base
            leading-7
            text-zinc-500

            dark:text-zinc-400
          "
        >
          I'm your MindSpace companion. You can talk to me,
          reflect on your day, or simply share what's on your mind.
        </p>

        {/* Quick Prompt Title */}

        <p
          className="
            mt-8
            text-sm
            font-medium
            text-zinc-500

            dark:text-zinc-400
          "
        >
          What would you like to talk about?
        </p>

        {/* Quick Prompts */}

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

          {prompts.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => onPromptClick?.(item.prompt)}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  p-4
                  text-left
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-indigo-300
                  hover:shadow-md

                  dark:border-zinc-800
                  dark:bg-zinc-900

                  dark:hover:border-zinc-700
                  dark:hover:bg-zinc-800
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-zinc-100
                    text-zinc-600
                    transition-colors

                    group-hover:bg-indigo-100
                    group-hover:text-indigo-600

                    dark:bg-zinc-800
                    dark:text-zinc-400

                    dark:group-hover:bg-zinc-700
                    dark:group-hover:text-indigo-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <span
                  className="
                    text-sm
                    font-medium
                    text-zinc-700

                    dark:text-zinc-200
                  "
                >
                  {item.title}
                </span>

              </button>
            );
          })}

        </div>

        {/* Privacy Notice */}

        <p
          className="
            mt-8
            text-xs
            text-zinc-400

            dark:text-zinc-500
          "
        >
          Your conversations are private and belong to you.
        </p>

      </div>

    </div>
  );
}