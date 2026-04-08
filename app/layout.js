import "./globals.css"
import MouseTrail from "./components/MouseTrail.js"

export const metadata = {
  title: "Jobson Portfolio",
  description: "Portfolio Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <MouseTrail />
        {children}
      </body>
    </html>
  )
}
