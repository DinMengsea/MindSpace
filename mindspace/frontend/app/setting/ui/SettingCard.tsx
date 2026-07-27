import { ReactNode } from "react";

interface SettingCardProps {
  children: ReactNode;
  className?: string;
}

export default function SettingCard({
  children,
  className = "",
}: SettingCardProps) {
  return (
    <section
      className={`
        rounded-3xl

        border
        border-zinc-200
        dark:border-zinc-800

        bg-white
        dark:bg-zinc-900

        p-6
        shadow-sm

        transition-colors
        duration-300

        ${className}
      `}
    >
      {children}
    </section>
  );
}