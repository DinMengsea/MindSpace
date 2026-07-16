import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-8xl flex-col items-center justify-center ">
        <Header />
      </main>
    </div>
  );
}