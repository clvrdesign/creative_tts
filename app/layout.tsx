import type { Metadata } from "next";
import { ClientProviders } from "./components/ClientProviders";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
  display: 'swap', // Optional for better font loading
});

const inter = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
  display: 'swap', // Optional for better font loading
});

export const metadata: Metadata = {
  title: "Voice Cloning TTS App",
  description: "A voice-cloning TTS app",
  // Optional metadata additions:
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!visible bg-neutral-100 dark:bg-neutral-950"
      suppressHydrationWarning
    >

      <body
        className={`min-h-screen ${soraSans.variable} ${inter.variable} antialiased`}
      ><ClientProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer /></ClientProviders>
      </body>

    </html>
  );
}