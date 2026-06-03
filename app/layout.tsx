import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-funnel-sans",
});

export const metadata: Metadata = {
  title: "Aita Design Studio",
  description: "Estúdio de design digital. Sites para marcas com identidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${funnelSans.variable} h-full`}>
      <body className="h-full font-sans antialiased bg-white text-neutral-900 overflow-hidden">
        <div className="h-full flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
          <Footer />
        </div>
        <SanityLive />
      </body>
    </html>
  );
}
