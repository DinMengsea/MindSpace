"use client";

import { useState } from "react";

import AIChatSidebar from "../../components/AIChatSidebar";
import AIChatHeader from "../../components/AIChatHeader";
import AIChatInput from "../../components/AIChatInput";
import AIMessageList from "../../components/AIMessageList";
import AIWelcome from "../../components/AIWelcome";

interface Conversation {
  id: number;
  title: string;
  messages: {
    id: number;
    role: "user" | "assistant";
    content: string;
  }[];
}

export default function AICompanion() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      title: "Feeling overwhelmed",
      messages: [
        {
          id: 1,
          role: "assistant",
          content:
            "Hi! I'm Mindy. I'm here whenever you need someone to talk to.",
        },
        {
          id: 2,
          role: "user",
          content:
            "I've been feeling really stressed about my studies lately.",
        },
        {
          id: 3,
          role: "assistant",
          content:
            "That sounds difficult. Studying can become overwhelming when everything starts piling up. What's been stressing you the most?",
        },
      ],
    },

    {
      id: 2,
      title: "Study stress",
      messages: [],
    },

    {
      id: 3,
      title: "Bad day",
      messages: [],
    },
  ]);

  const [activeConversation, setActiveConversation] =
    useState(1);

  // Get current conversation
  const currentConversation = conversations.find(
    (conversation) =>
      conversation.id === activeConversation
  );

  // Create new conversation
  const handleNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now(),
      title: "New Conversation",
      messages: [],
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveConversation(newConversation.id);
  };

  // Send message
  const handleSendMessage = (message: string) => {
    setConversations((previous) =>
      previous.map((conversation) => {
        if (conversation.id !== activeConversation) {
          return conversation;
        }

        return {
          ...conversation,

          // Change title automatically
          title:
            conversation.messages.length === 0
              ? message.slice(0, 30)
              : conversation.title,

          messages: [
            ...conversation.messages,

            {
              id: Date.now(),
              role: "user",
              content: message,
            },
          ],
        };
      })
    );
  };

  return (
    <div className="flex h-full min-h-0 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950">

      {/* AI Sidebar */}

      <AIChatSidebar
        collapsed={sidebarCollapsed}
        onToggle={() =>
          setSidebarCollapsed((previous) => !previous)
        }
        activeConversation={activeConversation}
        onConversationSelect={(id) => {
          setActiveConversation(id);
        }}
        onNewConversation={handleNewConversation}
      />

      {/* Main Chat */}

      <main className="flex min-h-0 min-w-0 flex-1 flex-col">

        {/* Header */}

        <AIChatHeader
          title={
            currentConversation?.title ??
            "New Conversation"
          }
        />

        {/* Messages */}

        <div className="min-h-0 flex-1 overflow-y-auto">

          {currentConversation &&
          currentConversation.messages.length > 0 ? (
            <AIMessageList
              messages={currentConversation.messages}
            />
          ) : (
            <AIWelcome />
          )}

        </div>

        {/* Input */}

        <AIChatInput
          onSend={handleSendMessage}
        />

      </main>

    </div>
  );
}