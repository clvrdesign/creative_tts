import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOICE-CLONING TTS APP",
  description: "A voice-cloning TTS app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-neutral-950 ${soraSans.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
