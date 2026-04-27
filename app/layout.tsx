import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Fayaz — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 9+ years of experience in React.js, Next.js, Vue.js, Laravel, Node.js and modern JavaScript. Based in Dubai, UAE. Available immediately.",
  keywords: ["Full stack developer Dubai", "React developer UAE", "Laravel developer Dubai", "Node.js developer UAE", "Vue.js developer"],
  openGraph: {
    title: "Muhammed Fayaz — Senior Full Stack Developer",
    description: "9+ years building high-performance web applications. PHP, Laravel, React.js, Next.js, Vue.js expert based in Dubai.",
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
