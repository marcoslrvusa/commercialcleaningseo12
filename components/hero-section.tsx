"use client"

import type React from "react"

export function HeroSection() {
  const handleAssessmentClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event("openQuotePopup"))
  }

  return (
    <section className="relative bg-gradient-to-br from-[#008B8B] to-[#004d55] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            The Definitive Standard for Commercial Cleaning in NJ & NY
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
            Strategic facility maintenance for businesses that value health, safety, and reputation.
          </p>
          <button
            onClick={handleAssessmentClick}
            className="inline-block bg-[#20B2AA] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1a9a92] transition-all shadow-lg text-lg"
          >
            Request Facility Assessment
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  )
}
