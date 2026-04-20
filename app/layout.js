import "./globals.css"
import { Fraunces, Raleway } from "next/font/google"
import MouseTrail from "./components/MouseTrail.js"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap"
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap"
})

export const metadata = {
  title: "Jobson Portfolio",
  description: "Portfolio Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="bg-[#1c1917] text-gray-900">{children}</body>
    </html>
  )
}
