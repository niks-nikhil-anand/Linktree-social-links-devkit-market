import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b10",
};

export const metadata: Metadata = {
  title: "Nikhil Anand | Developer & Maker",
  description:
    "Full-stack developer and maker behind DevKit Market. Explore my projects, connect with me, or let's build your next web product.",
  openGraph: {
    title: "Nikhil Anand | Developer & Maker",
    description:
      "Web products, developer tools, and ideas that ship. Find my work and let's connect.",
    type: "profile",
    firstName: "Nikhil",
    lastName: "Anand",
  },
  twitter: {
    card: "summary",
    creator: "@niks_developer",
    title: "Nikhil Anand | Developer & Maker",
    description:
      "The maker behind DevKit Market. Explore my work, connect, or hire me.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
