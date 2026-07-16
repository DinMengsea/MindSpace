import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

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
      <body className={`${fredoka.className} bg-zinc-50`}>
        {children}
      </body>
    </html>
  );
}