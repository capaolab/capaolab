import "./globals.css";
import Script from "next/script";

import { Inter } from "next/font/google";
import { SideBarProvider } from "@/contexts/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capao Lab",
  description: "Ai & Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarProvider>
          {children}
        </SideBarProvider>
      </body>
      <Script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></Script>
    </html>
  );
}
