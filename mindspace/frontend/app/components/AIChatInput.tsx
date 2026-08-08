"use client";

import { useState } from "react";
import { Plus, Send, Smile } from "lucide-react";

interface AIChatInputProps {
  onSend?: (message: string) => void;
}

export default function AIChatInput({
  onSend,
}: AIChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSend?.(trimmedMessage);

    setMessage("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="
        shrink-0
        border-t
        border-zinc-200
        bg-zinc-50
        px-4
        py-4

        dark:border-zinc-800
        dark:bg-zinc-950
      "
    >
      <div className="mx-auto w-full max-w-4xl">

        {/* Input Box */}

        <div
          className="
            flex
            items-end
            gap-2
            rounded-2xl
            border
            border-zinc-200
            bg-white
            p-2
            shadow-sm
            transition-all

            focus-within:border-indigo-400
            focus-within:ring-4
            focus-within:ring-indigo-100

            dark:border-zinc-700
            dark:bg-zinc-900

            dark:focus-within:border-zinc-600
            dark:focus-within:ring-zinc-800
          "
        >

          {/* Attachment */}

          <button
            type="button"
            aria-label="Add attachment"
            className="
              mb-1
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-zinc-400
              transition

              hover:bg-zinc-100
              hover:text-zinc-700

              dark:hover:bg-zinc-800
              dark:hover:text-zinc-200
            "
          >
            <Plus className="h-5 w-5" />
          </button>

          {/* Textarea */}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Message Mindy..."
            className="
              max-h-32
              min-h-10
              flex-1
              resize-none
              bg-transparent
              px-2
              py-2
              text-sm
              text-zinc-900
              outline-none
              placeholder:text-zinc-400

              dark:text-white
              dark:placeholder:text-zinc-500
            "
          />

          {/* Emoji */}

          <button
            type="button"
            aria-label="Add emoji"
            className="
              mb-1
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-zinc-400
              transition

              hover:bg-zinc-100
              hover:text-zinc-700

              dark:hover:bg-zinc-800
              dark:hover:text-zinc-200
            "
          >
            <Smile className="h-5 w-5" />
          </button>

          {/* Send */}

          <button
            type="button"
            onClick={handleSend}
            disabled={!message.trim()}
            aria-label="Send message"
            className="
              mb-1
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-indigo-600
              text-white
              transition-all

              hover:bg-indigo-700

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Send className="h-4 w-4" />
          </button>

        </div>

        {/* Hint */}

        <p
          className="
            mt-2
            text-center
            text-[11px]
            text-zinc-400

            dark:text-zinc-500
          "
        >
          Press Enter to send • Shift + Enter for a new line
        </p>

      </div>
    </div>
  );
}