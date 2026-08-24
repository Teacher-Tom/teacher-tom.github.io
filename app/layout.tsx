import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kailing-li-research-portfolio.teachertom.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kailing Li | Academic Homepage",
  description: "Academic homepage of Kailing Li, an embodied AI researcher working on vision-language navigation, Game VLA, multimodal memory, and video understanding.",
  keywords: ["Kailing Li", "Embodied AI", "Vision-Language Navigation", "Game VLA", "Video Understanding", "East China Normal University"],
  authors: [{ name: "Kailing Li", url: "https://github.com/Teacher-Tom" }],
  openGraph: { title: "Kailing Li | Academic Homepage", description: "Embodied AI, vision-language navigation, Game VLA, and video understanding.", type: "website", url: siteUrl, images: [{ url: "/og.png", width: 1792, height: 922, alt: "Kailing Li — Embodied Intelligence Researcher" }] },
  twitter: { card: "summary_large_image", title: "Kailing Li | Academic Homepage", description: "Embodied AI, vision-language navigation, Game VLA, and video understanding.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geistSans.variable + " " + geistMono.variable}>{children}</body></html>;
}