import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/components/NavBar";
import React from "react";
import MouseFollower from "@/src/components/MouseFollower";
import ScrollProgress from "@/src/components/ScrollProgress";
import EasterEggs from "@/src/components/EasterEggs";
import { getLang, getDictionary } from "@/src/utils/lang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sávio Decaro | Mobile Developer · Kotlin & Swift",
    template: "%s | Sávio Decaro",
  },
  description:
    "Portfólio de Sávio Decaro: desenvolvedor mobile (Kotlin e Swift) com base Full Stack em C#/.NET, Next.js e PostgreSQL.",
  openGraph: {
    title: "Sávio Decaro | Mobile Developer · Kotlin & Swift",
    description:
      "Portfólio de Sávio Decaro: desenvolvedor mobile (Kotlin e Swift) com base Full Stack.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();
  const dict = await getDictionary();

  return (
    <html lang={lang === 'pt' ? 'pt-br' : 'en'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <MouseFollower />
        <EasterEggs text={dict.easter} />
        <NavBar lang={lang} dict={dict} />

        {children}
      </body>
    </html>
  );
}
