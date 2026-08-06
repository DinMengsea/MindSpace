"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import { getUser } from "../../lib/api";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getUser();
        setUser(data);

        console.log(data);
      } catch (error) {
        
        console.error(error);
      }
    }

    loadUser();
  }, []);

  return (
    <div
      className="
        flex
        flex-1
        flex-col
        font-sans
        bg-zinc-50
        dark:bg-zinc-950
        transition-colors
        duration-300"
    >
      <main className="w-full px-5">
        <Header />

        <div className="mt-3">
          {/* Home Content Goes Here */}
        </div>
      </main>
    </div>
  );
}