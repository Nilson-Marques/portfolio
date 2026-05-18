import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nilson Marques — Front-end Developer",
  description:
    "Junior Web Developer specialising in React, Next.js and Node.js, with a security-first mindset. Based in Malta.",
  keywords: ["front-end developer", "React", "Next.js", "TypeScript", "cybersecurity", "Malta"],
  authors: [{ name: "Nilson Marques do Nascimento" }],
  openGraph: {
    title: "Nilson Marques — Front-end Developer",
    description: "Security-aware developer building clean, accessible web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-surface dark:bg-ink font-sans text-ink dark:text-paper antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
