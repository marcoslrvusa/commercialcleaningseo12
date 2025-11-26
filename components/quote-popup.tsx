"use client"

import { useState, useEffect } from "react"

export function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const handleOpenQuote = () => setIsOpen(true)
    window.addEventListener("openQuotePopup", handleOpenQuote)
    return () => window.removeEventListener("openQuotePopup", handleOpenQuote)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
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
  )
}
