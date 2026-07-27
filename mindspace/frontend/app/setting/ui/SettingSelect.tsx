import { SelectHTMLAttributes } from "react";

interface SettingSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export default function SettingSelect({
  label,
  options,
  className = "",
  ...props
}: SettingSelectProps) {
  return (
    <div className="space-y-2">
      <label
        className="
          block
          text-sm
          font-medium
          text-zinc-700
          dark:text-zinc-300
          transition-colors
          duration-300
        "
      >
        {label}
      </label>

      <select
        {...props}
        className={`
          w-full
          rounded-xl

          border
          border-zinc-300
          dark:border-zinc-700

          bg-white
          dark:bg-zinc-900

          px-4
          py-3

          text-sm
          text-zinc-700
          dark:text-white

          outline-none

          transition-all
          duration-300

          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-100

          dark:focus:border-white
          dark:focus:ring-zinc-700

          ${className}
        `}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}