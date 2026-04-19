import "./globals.css"
import { Fraunces, Montserrat } from "next/font/google"
import MouseTrail from "./components/MouseTrail.js"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata = {
  title: "Jobson Portfolio",
  description: "Portfolio Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
