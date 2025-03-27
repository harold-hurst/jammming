import { Geist, Geist_Mono } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import { Inter } from 'next/font/google'
import "./globals.css";


// using Next fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jammming",
  description: "Music web app using Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
