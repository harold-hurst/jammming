import "./globals.css";

// import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400','900']
})

export const metadata = {
  title: "Jammming",
  description: "Music web app using Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
