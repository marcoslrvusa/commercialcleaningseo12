import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"
import { QuotePopup } from "@/components/quote-popup"
import { MobileCallButton } from "@/components/mobile-call-button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Commercial Cleaning Services NJ & NY | Professional Janitorial & Facility Maintenance",
  description:
    "Premier Commercial Cleaning Services in New Jersey and New York. Specialized in Office Cleaning, Window Washing, Carpet Care, HVAC Duct Cleaning, and Kitchen Compliance.",
  openGraph: {
    title: "Commercial Cleaning Services NJ & NY | Premium Cleaning",
    description: "Professional commercial cleaning and janitorial services in New Jersey and New York.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="antialiased">
        {children}
        <QuotePopup />
        <MobileCallButton />
      </body>
    </html>
  )
}
