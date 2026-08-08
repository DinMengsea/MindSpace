"use client";

import {
  Plus,
  MoreHorizontal,
  Settings,
  MessageCircle,
  PanelLeft,
  Sparkles,
} from "lucide-react";

interface Conversation {
  id: number;
  title: string;
  date: "Today" | "Yesterday" | "Previous";
}

const conversations: Conversation[] = [
  {
    id: 1,
    title: "Feeling overwhelmed",
    date: "Today",
  },
  {
    id: 2,
    title: "Study stress",
    date: "Today",
  },
  {
    id: 3,
    title: "Bad day",
    date: "Yesterday",
  },
  {
    id: 4,
    title: "My goals",
    date: "Yesterday",
  },
  {
    id: 5,
    title: "Relationship thoughts",
    date: "Previous",
  },
  {
    id: 6,
    title: "Exam preparation",
    date: "Previous",
  },
];

interface AIChatSidebarProps {
  activeConversation?: number;
  onConversationSelect?: (id: number) => void;
  onNewConversation?: () => void;
  onOpenPreferences?: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

interface ConversationGroupProps {
  title: string;
  conversations: Conversation[];
  activeConversation: number;
  onConversationSelect?: (id: number) => void;
}

function ConversationGroup({
  title,
  conversations,
  activeConversation,
  onConversationSelect,
}: ConversationGroupProps) {
  if (conversations.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">

      {/* Section title */}

      <p
        className="
          mb-2
          px-3
          text-[11px]
          font-semibold
          uppercase
          tracking-wider
          text-zinc-400
          dark:text-zinc-500
        "
      >
        {title}
      </p>

      {/* Conversations */}

      <div className="space-y-1">

        {conversations.map((conversation) => {
          const active =
            activeConversation === conversation.id;

          return (
            <button
              key={conversation.id}
              type="button"
              onClick={() =>
                onConversationSelect?.(conversation.id)
              }
              className={`
                group
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2.5
                text-left
                transition-all
                duration-200

                ${
                  active
                    ? "bg-indigo-50 text-indigo-600 dark:bg-zinc-800 dark:text-indigo-400"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                }
              `}
            >

              <MessageCircle
                className={`
                  h-4
                  w-4
                  shrink-0
                  ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-400"
                  }
                `}
              />

              <span className="min-w-0 flex-1 truncate text-sm">
                {conversation.title}
              </span>

              <MoreHorizontal
                className="
                  h-4
                  w-4
                  shrink-0
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
              />

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default function AIChatSidebar({
  activeConversation = 1,
  onConversationSelect,
  onNewConversation,
  onOpenPreferences,
  collapsed,
  onToggle,
}: AIChatSidebarProps) {
  const groups = {
    Today: conversations.filter(
      (conversation) => conversation.date === "Today"
    ),
    Yesterday: conversations.filter(
      (conversation) => conversation.date === "Yesterday"
    ),
    Previous: conversations.filter(
      (conversation) => conversation.date === "Previous"
    ),
  };

  return (
    <aside
      className={`
        flex
        h-full
        min-h-0
        shrink-0
        flex-col
        border-r
        border-zinc-200
        bg-white
        transition-all
        duration-300
        ease-in-out

        dark:border-zinc-800
        dark:bg-zinc-900

        ${collapsed ? "w-16" : "w-72"}
      `}
    >
      {/* Header */}

      <div
        className={`
          flex
          shrink-0
          items-center
          ${
            collapsed
              ? "justify-center px-2 py-4"
              : "justify-between px-5 py-5"
          }
        `}
      >
        {!collapsed && (
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-indigo-100
                text-indigo-600

                dark:bg-zinc-800
                dark:text-indigo-400
              "
            >
              <Sparkles className="h-5 w-5" />
            </div>

            <div>

              <h2
                className="
                  font-semibold
                  text-zinc-900
                  dark:text-white
                "
              >
                MindSpace AI
              </h2>

              <p
                className="
                  text-xs
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Your personal companion
              </p>

            </div>

          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          aria-label={
            collapsed
              ? "Open AI sidebar"
              : "Collapse AI sidebar"
          }
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            text-zinc-500
            transition-all

            hover:bg-zinc-100
            hover:text-indigo-600

            dark:text-zinc-400
            dark:hover:bg-zinc-800
            dark:hover:text-white
          "
        >
          <PanelLeft className="h-5 w-5" />
        </button>

      </div>

      {/* Collapsed New Chat */}

      {collapsed ? (
        <div className="flex justify-center px-2">

          <button
            type="button"
            onClick={onNewConversation}
            aria-label="New conversation"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-zinc-500
              transition-all

              hover:bg-indigo-50
              hover:text-indigo-600

              dark:hover:bg-zinc-800
              dark:hover:text-indigo-400
            "
          >
            <Plus className="h-5 w-5" />
          </button>

        </div>
      ) : (
        /* Open New Chat */

        <div className="px-4">

          <button
            type="button"
            onClick={onNewConversation}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-zinc-200
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-zinc-700
              shadow-sm
              transition-all

              hover:border-indigo-300
              hover:bg-indigo-50
              hover:text-indigo-600

              dark:border-zinc-700
              dark:bg-zinc-800
              dark:text-zinc-200

              dark:hover:border-zinc-600
              dark:hover:bg-zinc-700
              dark:hover:text-white
            "
          >
            <Plus className="h-4 w-4" />

            New Conversation
          </button>

        </div>
      )}

      {/* Conversations */}

      <div
        className={`
          min-h-0
          flex-1
          overflow-y-auto
          py-5

          ${collapsed ? "px-2" : "px-3"}
        `}
      >

        {!collapsed && (
          <>
            <ConversationGroup
              title="Today"
              conversations={groups.Today}
              activeConversation={activeConversation}
              onConversationSelect={onConversationSelect}
            />

            <ConversationGroup
              title="Yesterday"
              conversations={groups.Yesterday}
              activeConversation={activeConversation}
              onConversationSelect={onConversationSelect}
            />

            <ConversationGroup
              title="Previous"
              conversations={groups.Previous}
              activeConversation={activeConversation}
              onConversationSelect={onConversationSelect}
            />
          </>
        )}

        {collapsed && (
          <div className="space-y-2">

            {conversations.slice(0, 5).map((conversation) => (

              <button
                key={conversation.id}
                type="button"
                onClick={() =>
                  onConversationSelect?.(conversation.id)
                }
                aria-label={conversation.title}
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  transition-all

                  ${
                    activeConversation === conversation.id
                      ? `
                        bg-indigo-50
                        text-indigo-600

                        dark:bg-zinc-800
                        dark:text-indigo-400
                      `
                      : `
                        text-zinc-400
                        hover:bg-zinc-100
                        hover:text-zinc-700

                        dark:hover:bg-zinc-800
                        dark:hover:text-zinc-200
                      `
                  }
                `}
              >
                <MessageCircle className="h-4 w-4" />
              </button>

            ))}

          </div>
        )}

      </div>

      {/* Preferences */}

      <div
        className="
          shrink-0
          border-t
          border-zinc-200
          p-3

          dark:border-zinc-800
        "
      >

        <button
          type="button"
          onClick={onOpenPreferences}
          aria-label="AI Preferences"
          className={`
            flex
            w-full
            items-center
            rounded-xl
            py-3
            text-sm
            font-medium
            text-zinc-600
            transition-all

            hover:bg-zinc-100
            hover:text-indigo-600

            dark:text-zinc-400
            dark:hover:bg-zinc-800
            dark:hover:text-white

            ${collapsed ? "justify-center" : "gap-3 px-3"}
          `}
        >
          <Settings className="h-5 w-5 shrink-0" />

          {!collapsed && "AI Preferences"}

        </button>

      </div>

    </aside>
  );
}