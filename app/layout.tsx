import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LUMI | Product Showcase",
  description: "Discover thoughtfully selected products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}

        <footer className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-500">
            © 2026 LUMI. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}