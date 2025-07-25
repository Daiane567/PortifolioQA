import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daiane | QA Tester",
  description: "Portfólio de QA Tester",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-purple-800 to-purple-300 text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
