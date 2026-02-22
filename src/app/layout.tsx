import type { Metadata } from "next";
import { Inter, Syncopate, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Khalifa | AI Product & Ad Video Creator",
  description: "High-end personal landing page of Ahmed Khalifa, an AI Product & Ad Video Creator specialized in cinematic direction.",
  openGraph: {
    title: "Ahmed Khalifa | AI Product & Ad Video Creator",
    description: "Cinematic direction and high-impact visuals for premium products.",
    url: "https://ahmed-portfolio-inky.vercel.app",
    siteName: "Ahmed Khalifa Portfolio",
    images: [
      {
        url: "/ahmed-professional-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Khalifa - High Impact Creative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Khalifa | AI Product & Ad Video Creator",
    description: "Cinematic direction and high-impact visuals.",
    images: ["/ahmed-professional-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syncopate.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
