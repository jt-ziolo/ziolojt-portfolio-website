import type { Metadata } from "next";
import { Inter, Quattrocento, Space_Grotesk, Wallpoet } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { siteInfo } from "@/site-info";
import { Theme } from "@radix-ui/themes";

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
        <Theme accentColor="teal" grayColor="sage" radius="small">
          {children}
        </Theme>
      </body>
    </html>
  );
}
