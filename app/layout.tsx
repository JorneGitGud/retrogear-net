import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retrogear.net is te koop | JOR-Design",
  description: "Retrogear.net is te koop voor €400. De domeinnaam is al onder bod, maar een nieuw voorstel is welkom via JOR-Design.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Retrogear.net is te koop",
    description: "Een sterke naam voor jouw volgende retroproject. Vraagprijs: €400. Breng een bod uit via JOR-Design.",
    url: "https://retrogear.net",
    siteName: "Retrogear.net",
    locale: "nl_NL",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}
