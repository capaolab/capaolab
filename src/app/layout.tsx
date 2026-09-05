import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import AppLayout from "@/components/AppLayout";
import theme from "@/theme";


const plexSans = IBM_Plex_Sans({
    variable: "--font-plex-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ibmPlex = IBM_Plex_Mono({
    variable: "--font-plex-mono",
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
            <body className={`${plexSans.variable} ${ibmPlex.variable}`}>
                <MantineProvider theme={theme} defaultColorScheme="light">
                    <AppLayout>{children}</AppLayout>
                </MantineProvider>
            </body>
        </html>
    );
}
