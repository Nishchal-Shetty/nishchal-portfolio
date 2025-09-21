// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Nishchal Shetty — Portfolio",
  description: "Backend & Cloud Engineer — building reliable, scalable systems",
  openGraph: {
    title: "Nishchal Shetty — Portfolio",
    description: "Backend & Cloud Engineer — building reliable, scalable systems",
    url: "https://your-domain.com",
    siteName: "Nishchal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishchal Shetty — Portfolio",
    description: "Backend & Cloud Engineer — building reliable, scalable systems",
  },
  // optional polish:
  // icons: { icon: "/favicon.ico" },
  // metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // default to dark to match your globals.css tokens
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
