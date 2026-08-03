export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="
        min-h-screen

        flex
        items-center
        justify-center

        bg-slate-50
        dark:bg-zinc-950

        transition-colors
        duration-300
      "
    >
      <div className="w-full px-6">
        {children}
      </div>
    </main>
  );
}