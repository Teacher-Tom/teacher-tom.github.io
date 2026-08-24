import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { homeUrl } from "./site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(homeUrl),
  title: "李锴凌 (Kailing Li) | Academic Homepage",
  description: "李锴凌（Kailing Li）的学术主页。华东师范大学计算机科学与技术硕士研究生，研究方向包括具身智能、视觉语言导航、Game VLA 与视频理解。",
  keywords: ["李锴凌", "Kailing Li", "Teacher-Tom", "华东师范大学", "East China Normal University", "具身智能", "Embodied AI", "Vision-Language Navigation", "Game VLA", "Video Understanding"],
  authors: [{ name: "李锴凌 (Kailing Li)", url: homeUrl }],
  creator: "李锴凌 (Kailing Li)",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { title: "李锴凌 (Kailing Li) | Academic Homepage", description: "华东师范大学具身智能研究者，研究视觉语言导航、Game VLA 与视频理解。", type: "profile", url: homeUrl, siteName: "Kailing Li Academic Homepage", locale: "en_US", alternateLocale: ["zh_CN"], images: [{ url: "/og.png", width: 1792, height: 922, alt: "李锴凌 (Kailing Li) — Embodied Intelligence Researcher" }] },
  twitter: { card: "summary_large_image", title: "李锴凌 (Kailing Li) | Academic Homepage", description: "华东师范大学具身智能研究者，研究视觉语言导航、Game VLA 与视频理解。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geistSans.variable + " " + geistMono.variable}>{children}</body></html>;
}