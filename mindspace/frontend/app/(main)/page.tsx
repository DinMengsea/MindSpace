import Header from "../components/header";

export default function Home() {
  return (
    <div className="    
          flex
          flex-1
          flex-col
          font-sans
          bg-zinc-50
          dark:bg-zinc-950
          transition-colors
          duration-300">
      <main className="w-full px-5">
        <Header />

        <div className="mt-3">
          {/* Home Content Goes Here */}

        </div>
      </main>
    </div>
  );
}