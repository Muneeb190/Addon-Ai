import "./globals.css"
import type React from "react"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Addon AI",
  description: "none",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        {children}
        </body>
    </html>
  )
}

