import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { LenisScroll } from "@/components/common/LenisScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sovereign E-Books | Elite Digital Library",
  description:
    "Experience the world's most premium digital reading platform. 10,000+ curated titles, exclusive author content, and a state-of-the-art reading experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-black text-white selection:bg-red-500/30`}
      >
        <LenisScroll />
        <Navbar />
        <main className="relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
