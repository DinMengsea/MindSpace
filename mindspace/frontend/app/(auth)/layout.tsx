export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="w-full px-6">
        {children}
      </div>
    </main>
  );
}