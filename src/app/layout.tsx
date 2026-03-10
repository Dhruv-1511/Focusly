import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { AuthProvider } from "@/components/providers/AuthProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Focusly | Solve, Plan and Excel",
    template: "%s | Focusly"
  },
  description: "Focusly is the ultimate neural-sync platform designed to eliminate distractions and achieve deep work with surgical precision.",
  keywords: ["productivity", "focus", "deep work", "study tools", "student planner", "AI tutor", "mental health", "rewards"],
  authors: [{ name: "Focusly Team" }],
  creator: "Focusly",
  publisher: "Focusly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://focusly.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Focusly | Solve, Plan and Excel",
    description: "The ultimate student-focused platform for guidance, structure, and progress tracking.",
    url: "https://focusly.app",
    siteName: "Focusly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Focusly Neural Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focusly | Solve, Plan and Excel",
    description: "Achieve deep work with surgical precision.",
    images: ["/og-image.png"],
    creator: "@focusly",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

import { NeuralBackground } from "@/components/ui/NeuralBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen bg-background text-foreground flex`}>
        <NeuralBackground />
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}


