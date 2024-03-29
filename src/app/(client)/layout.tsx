import { cn } from "@/lib/utils";
import "../globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mono = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(mono.className, "bg-[#1d1d1d] text-[#c9c9c9] max-w-7xl mx-auto")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
