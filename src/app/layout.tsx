import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritvik Sardhyal — Application Support Engineer | Cloud Admin",
  description: "Senior Software Engineer specializing in high-concurrency backend infrastructure, low-latency distributed systems, and zero-vulnerability cloud pipelines.",
  keywords: ["Systems Architect", "Backend Engineer", "Go", "Python", "Next.js 16", "Distributed Systems"],
  openGraph: {
    title: "Ritvik Sardhyal — Application Support Engineer",
    description: "High-concurrency systems, low-latency distributed infrastructure, and production case studies.",
    type: "website",
    siteName: "Alex Vantage Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritvik Sardhyal — Application Support Engineer",
    description: "High-concurrency systems & scalable web infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#050507] text-zinc-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}