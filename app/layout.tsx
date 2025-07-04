import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./Providers"

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  variable: '--inter-font'
})

export const metadata: Metadata = {
  title: "Rafael Diniz - Software Engineer",
  description: "Portfolio of Rafael Diniz, Software Engineer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  // if (!inter) return <></>
  return (
    <html lang="en" >
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
