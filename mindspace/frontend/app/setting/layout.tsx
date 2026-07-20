import SettingSidebar from "../components/settingsidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <SettingSidebar/>
      <main className="mx-auto max-w-5xl p-8">
        {children}
      </main>
    </div>
  );
}