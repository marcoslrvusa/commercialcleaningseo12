"use client"

interface GHLFormProps {
  variant?: "inline" | "sidebar"
  title?: string
  description?: string
}

export function GHLForm({ variant = "inline", title, description }: GHLFormProps) {
  if (variant === "sidebar") {
    return (
      <div
        className="bg-gradient-to-br from-cyan-50 to-white border-2 rounded-xl p-6 shadow-lg"
        style={{ borderColor: "#20B2AA" }}
      >
        <div className="bg-white rounded-lg overflow-hidden" style={{ height: "480px" }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/VopgpG6S8BWb5pNyFHdr"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
            id="inline-VopgpG6S8BWb5pNyFHdr"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 4"
            data-height="480"
            data-layout-iframe-id="inline-VopgpG6S8BWb5pNyFHdr"
            data-form-id="VopgpG6S8BWb5pNyFHdr"
            title="Form 4"
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-gradient-to-br from-cyan-50 to-white border-2 rounded-xl p-8 shadow-lg mb-12"
      style={{ borderColor: "#20B2AA" }}
    >
      {title && (
        <>
          <span className="text-xs text-[#008B8B] uppercase tracking-wider font-bold block mb-2">Free Assessment</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        </>
      )}
      {description && <p className="text-gray-700 mb-6">{description}</p>}

      <div className="bg-white rounded-lg overflow-hidden" style={{ height: "480px" }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/VopgpG6S8BWb5pNyFHdr"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
          id="inline-VopgpG6S8BWb5pNyFHdr-inline"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 4"
          data-height="480"
          data-layout-iframe-id="inline-VopgpG6S8BWb5pNyFHdr-inline"
          data-form-id="VopgpG6S8BWb5pNyFHdr"
          title="Form 4"
        />
      </div>
    </div>
  )
}
