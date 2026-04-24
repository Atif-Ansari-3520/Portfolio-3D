import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M. ATIF ANSARI | Software Engineer 3D Portfolio",
  description: "Modern 3D Glassmorphism portfolio built with Next.js and Three.js",
};

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white cursor-none md:cursor-auto"
      >
        <CustomCursor />
        <SmoothScroll>
          <Loader />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
