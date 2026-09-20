import type { Metadata, Viewport } from "next";
import { Newsreader, Geist } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amir Hakim: Chapter I",
  description:
    "Personal monologue and opening scene by Amir Hakim. Trapped somewhere between the person he used to be and the person he has yet to become.",
  openGraph: {
    title: "Amir Hakim: Chapter I",
    description:
      "A clueless guy, trapped somewhere between the person he used to be and the person he has yet to become.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistSans.variable} light antialiased`}
    >
      <body className="min-h-screen bg-[#f8fafc] text-[#090d16] selection:bg-blue-600/15 selection:text-blue-900 relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-slate-50 focus:text-xs focus:font-medium focus:tracking-wider focus:uppercase focus:shadow-md focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
