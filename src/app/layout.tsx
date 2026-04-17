import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";

/** Body / UI — matches Pixend (Framer) which ships Inter. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinjieber | Industrial Valves & Pumps Manufacturer Since 1988",
  description:
    "Global manufacturer of high-performance valves, pumps & fluid control solutions for oil & gas, municipal water, fire protection, and power industries. ISO 9001, API, UL/FM, AWWA certified. Trusted by engineers and contractors in 40+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/*
          Display / hero — Satoshi is what Pixend ships in-page (`data-framer-font-css`).
          Source: https://pixendagency.framer.website/
        */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body
        className={cn("min-h-dvh bg-white font-sans text-zinc-900 antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
