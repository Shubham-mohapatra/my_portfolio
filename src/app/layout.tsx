import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shubhammohapatra.com'), // Replace with your actual domain
  title: "Shubham Mohapatra | Full Stack Developer",
  description: "Portfolio of Shubham Mohapatra - Full Stack Developer specializing in React, Next.js, and AI/ML solutions.",
  keywords: ["Shubham Mohapatra", "Full Stack Developer", "Web Developer", "React", "Next.js", "AI", "Machine Learning", "Portfolio"],
  authors: [{ name: "Shubham Mohapatra" }],
  openGraph: {
    title: "Shubham Mohapatra | Full Stack Developer",
    description: "Building smart, meaningful digital experiences. Explore my portfolio of web and AI projects.",
    url: "https://shubhammohapatra.com", // Assuming this will be the domain based on previous context
    siteName: "Shubham Mohapatra Portfolio",
    images: [
      {
        url: "/og-image.png", // We might need to create this later, but good to have the placeholder
        width: 1200,
        height: 630,
        alt: "Shubham Mohapatra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Mohapatra | Full Stack Developer",
    description: "Building smart, meaningful digital experiences. Explore my portfolio of web and AI projects.",
    creator: "@ShubhamMohapatra", // Placeholder if unknown
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable}`}>
        {children}
      </body>
    </html>
  );
}
