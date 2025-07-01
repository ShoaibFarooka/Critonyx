"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore")

    // Only apply grayscale effect on first visit to homepage
    if (!hasVisitedBefore && pathname === "/") {
      document.body.classList.add("grayscale-initial")

      // Add color activation class after the transition period
      const timer = setTimeout(() => {
        document.body.classList.add("color-activated")
        document.body.classList.remove("grayscale-initial")
        // Mark that user has visited before
        localStorage.setItem("hasVisitedBefore", "true")
      }, 2000) // Reduced from 6500ms to 2000ms for a smoother experience

      return () => clearTimeout(timer)
    } else {
      // For returning visitors or other pages, start with color already activated
      document.body.classList.add("color-activated")
    }
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Critonyx | Delivering Technology at 2X Speed</title>
        <meta
          name="description"
          content="We deliver tech solutions in half the time with stack-specific developers for all your digital transformation needs."
        />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IrCWWi577zqoIb0pmXBjTG2imacxHB.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
