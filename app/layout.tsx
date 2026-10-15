import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retrogear.net is for sale | JOR-Design",
  description: "Retrogear.net is for sale for €400. The domain already has an offer, but new offers are welcome through JOR-Design.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Retrogear.net is for sale",
    description: "A memorable name for your next retro project. Asking price: €400. Make an offer through JOR-Design.",
    url: "https://retrogear.net",
    siteName: "Retrogear.net",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
