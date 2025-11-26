"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const isHomepage = window.location.pathname === "/"

    if (isHomepage) {
      const formSection = document.querySelector("#quote-section")
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      setIsPopupOpen(true)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-48 h-12">
                <Image
                  src="/premium-cleaning-services-nj-ny_.png"
                  alt="Premium Cleaning Services NJ NY"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-semibold text-gray-700 hover:text-[#008B8B] transition-colors">
                Services
              </Link>
              <a
                href="tel:+19732042310"
                className="font-semibold text-[#008B8B] hover:text-[#20B2AA] transition-colors flex items-center gap-2"
              >
                <span className="text-lg">📞</span>
                (973) 204-2310
              </a>
              <button
                onClick={handleQuoteClick}
                className="inline-block bg-[#20B2AA] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#1a9a92] transition-all shadow-md text-sm"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        </div>
      </header>

      {isPopupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

              <div className="bg-white rounded-lg overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/VopgpG6S8BWb5pNyFHdr"
                  style={{ width: "100%", height: "523px", border: "none", borderRadius: "3px" }}
                  id="inline-VopgpG6S8BWb5pNyFHdr-popup"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 4"
                  data-height="523"
                  data-layout-iframe-id="inline-VopgpG6S8BWb5pNyFHdr-popup"
                  data-form-id="VopgpG6S8BWb5pNyFHdr"
                  title="Form 4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
