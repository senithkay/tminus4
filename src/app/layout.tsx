import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";


import { Analytics } from "@vercel/analytics/react"



import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import { FooterNew } from "@/components/FooterNew";

const SpaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "T-4",
  description: "T Minus 4 | Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className + '  overflow-x-hidden verflow-y-hidden'}>
        <Analytics />
        <div className={'w-full relative  overflow-x-hidden verflow-y-hidden'}>
          {children}
        </div>
        <footer>
          <FooterNew />
        </footer>
      </body>
    </html>
  );

}
