import { ReactNode } from "react";

interface SettingSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SettingSection({
  title,
  description,
  children,
}: SettingSectionProps) {
  return (
    <section className="space-y-5">
      <div>
        <h2
          className="
            text-xl
            font-semibold
            text-zinc-900
            dark:text-white

            transition-colors
            duration-300
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-1
              text-sm
              text-zinc-500
              dark:text-zinc-400

              transition-colors
              duration-300
            "
          >
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}