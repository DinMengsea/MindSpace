import { ButtonHTMLAttributes } from "react";

interface SettingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function SettingButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: SettingButtonProps) {
  const variants = {
    primary: `
      bg-indigo-600
      text-white
      hover:bg-indigo-700

      dark:bg-white
      dark:text-zinc-900
      dark:hover:bg-zinc-200
    `,

    secondary: `
      border
      border-zinc-200
      dark:border-zinc-700

      bg-white
      dark:bg-zinc-900

      text-zinc-700
      dark:text-zinc-200

      hover:bg-zinc-100
      dark:hover:bg-zinc-800
    `,

    danger: `
      bg-red-600
      text-white
      hover:bg-red-700

      dark:bg-red-500
      dark:hover:bg-red-600
    `,
  };

  return (
    <button
      {...props}
      className={`
        rounded-xl
        px-5
        py-3
        text-sm
        font-semibold

        transition-all
        duration-300

        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}