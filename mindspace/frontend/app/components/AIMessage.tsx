"use client";

import { Sparkles } from "lucide-react";

interface AIMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function AIMessage({
  role,
  content,
}: AIMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`
        flex
        w-full
        px-4
        py-4
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          flex
          max-w-2xl
          items-start
          gap-3
          ${isUser ? "flex-row-reverse" : "flex-row"}
        `}
      >

        {/* Avatar */}

        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl

            ${
              isUser
                ? `
                  bg-indigo-600
                  text-white
                `
                : `
                  bg-indigo-100
                  text-indigo-600

                  dark:bg-zinc-800
                  dark:text-indigo-400
                `
            }
          `}
        >
          {isUser ? (
            <span className="text-sm font-semibold">
              D
            </span>
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
        </div>

        {/* Message Content */}

        <div
          className={`
            rounded-2xl
            px-4
            py-3
            text-sm
            leading-6
            whitespace-pre-wrap
            break-words

            ${
              isUser
                ? `
                  rounded-tr-md
                  bg-indigo-600
                  text-white
                `
                : `
                  rounded-tl-md
                  bg-white
                  text-zinc-700
                  shadow-sm

                  dark:bg-zinc-900
                  dark:text-zinc-200
                `
            }
          `}
        >
          {content}
        </div>

      </div>
    </div>
  );
}