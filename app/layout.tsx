import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Fayaz — Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 9+ years of experience in React.js, Next.js, Vue.js, and modern JavaScript. Based in Dubai, UAE. Available immediately.",
  keywords: ["React developer Dubai", "Frontend developer UAE", "Next.js developer", "Vue.js developer", "Full stack developer Dubai"],
  openGraph: {
    title: "Muhammed Fayaz — Senior Frontend Developer",
    description: "9+ years building high-performance web applications. React.js, Next.js, Vue.js expert based in Dubai.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
