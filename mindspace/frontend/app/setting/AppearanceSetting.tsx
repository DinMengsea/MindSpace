"use client";

import { Sun, Moon } from "lucide-react";

import SettingCard from "./ui/SettingCard";
import SettingSection from "./ui/SettingSection";
import ThemeCard from "./ui/ThemeCard";
import FontSelector from "./ui/FontSelector";
import AppearancePreview from "./ui/AppearancePreview";

import { useAppSetting } from "../components/provider/AppSettingProvider";

export default function AppearanceSetting() {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
  } = useAppSetting();

  return (
    <form className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
          Appearance
        </h1>

        <p className="mt-2 text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          Customize how your MindSpace looks and feels
        </p>

      </div>

      {/* Theme */}

      <SettingCard>

        <SettingSection
          title="Theme"
          description="Choose your preferred appearance"
        >

          <div className="grid grid-cols-2 gap-5">

            <ThemeCard
              icon={<Sun size={26} />}
              title="Light"
              description="Bright interface"
              active={theme === "light"}
              onClick={() => setTheme("light")}
            />

            <ThemeCard
              icon={<Moon size={26} />}
              title="Dark"
              description="Comfortable at night"
              active={theme === "dark"}
              onClick={() => setTheme("dark")}
            />

          </div>

        </SettingSection>

      </SettingCard>

      {/* Preview */}

      <SettingCard>

        <SettingSection
          title="Theme Preview"
          description="Preview your theme"
        >
          <AppearancePreview />
        </SettingSection>

      </SettingCard>

      {/* Font */}

      <SettingCard>

        <SettingSection
          title="Font Size"
          description="Choose the default text size"
        >

          <FontSelector
            value={fontSize}
            onChange={setFontSize}
          />

        </SettingSection>

      </SettingCard>

    </form>
  );
}