import "./globals.css"
import { Fraunces, Geist_Mono } from "next/font/google"
import MouseTrail from "./components/MouseTrail.js"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
})

export const metadata = {
  title: "Jobson Portfolio",
  description: "Portfolio Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
