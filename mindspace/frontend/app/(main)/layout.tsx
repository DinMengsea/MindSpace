import Sidebar from "../components/sidebar";
import { Fredoka,} from "next/font/google";
// Example
// export default function RootLayout({children}: {children: React.ReactNode}) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//       <Header />
//       <Footer />
//     </html>
//   );
// }
// // Different between export function meaning it can use in other files, but function Header() is only used in this file

// export function Header() {
//     return <h1>Header</h1>;
// }

// export function Footer() {
//     return <h1>Footer</h1>;
// }
const fredoka = Fredoka({
  subsets: ["latin"],
});

export default function MainLayout({children,}: {children: React.ReactNode;}) {
    return (
      <div className="flex h-screen bg-slate-50">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
          {children}
        </main>
      </div>
  );
}
