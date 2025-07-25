import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Bungee, Space_Grotesk, Comic_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "AI Guide - Your Ultimate AI Tools Resource",
  description: "Discover the best AI code editors, chatbots, and tools to enhance your development workflow. Compare Cursor, Windsurf, ChatGPT, Claude, Gemini, and more.",
  icons: {
    icon: "/website-icon.ico",
    other: {
      rel: "icon",
      url: "/website-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${bungee.variable} ${spaceGrotesk.variable} ${comicNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
