import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {ConditionalHeader , ConditionalFooter} from "./components/conditionalLayout";

// Mark layout as dynamic to prevent static generation issues
export const dynamic = "force-dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AVION T2",
  description: "E Commerce Website By Muhammad Shahroz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>


        <ConditionalHeader/>
      
          {children}

        <ConditionalFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
