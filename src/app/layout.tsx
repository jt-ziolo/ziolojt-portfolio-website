import type { Metadata } from "next";
import { Inter, Quattrocento, Space_Grotesk, Wallpoet } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/site-info";

/* Fonts:
  - Inter
  - Quattrocento
  - Space Grotesk
  - Wallpoet
*/

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  variable: "--font-quattrocento",
  display: "swap",
  weight: "700",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const wallpoet = Wallpoet({
  subsets: ["latin"],
  variable: "--font-wallpoet",
  display: "swap",
  weight: "400",
});

// Metadata
export const metadata: Metadata = {
  title: {
    template: siteInfo.titleTemplate,
    default: siteInfo.titleDefault,
  },
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quattrocento.variable} ${spaceGrotesk.variable} ${wallpoet.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
