interface SettingToggleProps {
  title: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function SettingToggle({
  title,
  description,
  checked,
  onChange,
}: SettingToggleProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-zinc-200
        dark:border-zinc-800

        bg-white
        dark:bg-zinc-900

        p-5

        transition-colors
        duration-300
      "
    >
      <div>
        <h3 className="font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative
          h-7
          w-12
          rounded-full

          transition-all
          duration-300

          ${
            checked
              ? "bg-indigo-600 dark:bg-white"
              : "bg-zinc-300 dark:bg-zinc-700"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full

            bg-white
            dark:bg-zinc-900

            shadow

            transition-all
            duration-300

            ${checked ? "left-6" : "left-1"}
          `}
        />
      </button>
    </div>
  );
}