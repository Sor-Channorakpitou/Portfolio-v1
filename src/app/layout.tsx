import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VzTu Portfolio — Sor Channorakpitou",
    template: "%s — VzTu",
  },
  description:
    "Sor Channorakpitou — Computer Science student at CADT building full-stack web apps with React, Express and PostgreSQL. Open to software engineering internships.",
  keywords: [
    "Sor Channorakpitou",
    "portfolio",
    "software engineering",
    "full stack developer",
    "CADT",
    "Cambodia",
    "React",
    "Express",
    "PostgreSQL",
  ],
  authors: [{ name: "Sor Channorakpitou" }],
  creator: "Sor Channorakpitou",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VzTu Portfolio",
    title: "Sor Channorakpitou — Software Engineering Portfolio",
    description:
      "Sor Channorakpitou — Computer Science student at CADT building full-stack web apps with React, Express and PostgreSQL. Open to software engineering internships.",
    images: [
      {
        url: "/hero.jpg",
        alt: "Sor Channorakpitou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sor Channorakpitou — Software Engineering Portfolio",
    description:
      "Sor Channorakpitou — Computer Science student at CADT building full-stack web apps with React, Express and PostgreSQL. Open to software engineering internships.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#101718" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col pb-24 md:pb-0">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}