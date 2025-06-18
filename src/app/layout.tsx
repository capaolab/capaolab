import type { Metadata } from "next";

import './globals.css';
import '@mantine/core/styles.css';
import theme from "@/theme";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

const manRope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Capaolab",
  keywords: ["Capaolab", "Next.js", "Mantine", "React"],
  authors: [{ name: "Capaolab Team", url: "https://capaolab.com" }],
  creator: "Capaolab Team",
  openGraph: {
    title: "Capaolab",
    description: "Capaolab is a platform for creating and sharing AI-powered applications.",
    url: "https://capaolab.com",
    siteName: "Capaolab",
    images: [
      {
        url: "https://capaolab.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Capaolab Open Graph Image",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${manRope.variable} ${ibmPlex.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
