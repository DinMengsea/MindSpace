

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto max-w-5xl p-8">
        {children}
      </main>
    </div>
  );
}