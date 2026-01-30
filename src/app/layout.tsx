import type { Metadata } from"next";
import { Montserrat } from"next/font/google";
import"./globals.css";
import { Navbar } from"@/components/layout/Navbar";
import { Sidebar } from"@/components/layout/Sidebar";

const montserrat = Montserrat({
  variable:"--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:"StudyHub | Solve, Plan & Excel",
  description:"The ultimate student-focused platform for guidance, structure, and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased min-h-screen bg-background text-foreground flex`}
      >
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen lg:pl-64">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

