import { InputHTMLAttributes } from "react";

interface SettingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function SettingInput({
  label,
  className = "",
  ...props
}: SettingInputProps) {
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

      <input
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

          text-zinc-700
          dark:text-white

          placeholder:text-zinc-400
          dark:placeholder:text-zinc-500

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
      />
    </div>
  );
}