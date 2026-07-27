"use client";

import { useAppSetting } from "@/app/components/provider/AppSettingProvider";

export default function AppearancePreview() {
  const { fontSize, theme } = useAppSetting();

  const previewClass = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div
      className={`
        rounded-2xl
        border
        p-6
        transition-all
        duration-300

        ${
          theme === "dark"
            ? "border-zinc-700 bg-zinc-900"
            : "border-zinc-200 bg-white"
        }
      `}
    >
      <div className={previewClass[fontSize]}>

        <h4
          className={`
            font-semibold
            transition-colors
            duration-300

            ${
              theme === "dark"
                ? "text-white"
                : "text-zinc-900"
            }
          `}
        >
          Welcome back!
        </h4>

        <p
          className={`
            mt-2
            ${previewClass[fontSize]}

            transition-colors
            duration-300

            ${
              theme === "dark"
                ? "text-zinc-300"
                : "text-zinc-600"
            }
          `}
        >
          Today is a wonderful day to write your journal
          and reflect on your emotions.
        </p>

      </div>
    </div>
  );
}