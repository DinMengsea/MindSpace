"use client";

import AIMessage from "../components/AIMessage";

export interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface AIMessageListProps {
  messages: ChatMessage[];
}

export default function AIMessageList({
  messages,
}: AIMessageListProps) {
  return (
    <div className="mx-auto w-full max-w-4xl py-4">

      {messages.map((message) => (
        <AIMessage
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}

    </div>
  );
}