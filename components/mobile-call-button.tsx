"use client"

import { Phone } from "lucide-react"

export function MobileCallButton() {
  return (
    <a
      href="tel:9732042310"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A5F5F] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:hidden"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
