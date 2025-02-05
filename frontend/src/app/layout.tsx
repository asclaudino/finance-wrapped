import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Bungee_Outline } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';


/*
  Quicksand -> use it for infos and minor texts
*/
export const quicksand = Quicksand({
  weight : ["400"],
  variable: "--font-quicksand",
  subsets: ["latin"],
})


/*
  Bungee_Outline -> use it for titles and punchlines
*/

export const bungeeOutline = Bungee_Outline({
  weight : ["400"],
  variable: "--font-bungee-outline",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Financial Wrapped",
  description: "Financial Wrapped",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
