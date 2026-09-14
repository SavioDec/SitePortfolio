import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/components/NavBar";
import React from "react";
import MouseFollower from "@/src/components/MouseFollower";
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
  title: "Sávio Decaro",
  description: "Portfólio de Sávio Decaro",
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
      <MouseFollower/>
      <NavBar lang={lang} dict={dict} />

        {children}
      </body>
    </html>
  );
}
