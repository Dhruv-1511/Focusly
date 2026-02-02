import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyHub | Solve, Plan & Excel",
  description: "The ultimate student-focused platform for guidance, structure, and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased min-h-screen bg-background text-foreground flex`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


