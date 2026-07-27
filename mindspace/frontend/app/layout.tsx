import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { AppSettingProvider } from "./components/provider/AppSettingProvider";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindSpace",
  description: "A mental wellness platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300`}>
        <AppSettingProvider>
          {children}
        </AppSettingProvider>
      </body>
    </html>
  );
}