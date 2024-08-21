import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Analytics } from "@vercel/analytics/react"



import "./globals.css";
import React from "react";
import Navbar from "@/app/components/navbar";

const roboto = Roboto({
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
      <body className={roboto.className + ' dark:bg-black overflow-x-hidden'}>
      <Analytics />
      <div className={'w-full relative '}>
        {children}
      </div>
      </body>
    </html>
  );
}
