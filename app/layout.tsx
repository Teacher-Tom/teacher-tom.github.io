import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kailing Li | Embodied Intelligence Researcher",
  description: "Kailing Li is an embodied intelligence researcher working on vision-language navigation, Game VLA, multimodal memory, and video understanding.",
  keywords: ["Kailing Li", "Embodied Intelligence", "Vision-Language Navigation", "Game VLA", "Video Understanding", "East China Normal University"],
  authors: [{ name: "Kailing Li", url: "https://github.com/Teacher-Tom" }],
  openGraph: { title: "Kailing Li | Embodied Intelligence Researcher", description: "Research in embodied intelligence, vision-language navigation, Game VLA, and multimodal memory.", type: "website" },
  twitter: { card: "summary", title: "Kailing Li | Embodied Intelligence Researcher", description: "Research in embodied intelligence, vision-language navigation, Game VLA, and multimodal memory." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geistSans.variable + " " + geistMono.variable}>{children}</body></html>;
}