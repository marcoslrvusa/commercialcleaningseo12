interface ConversionFormProps {
  variant?: "inline" | "sidebar"
  title: string
  description: string
  formLabel: string
}

export function ConversionForm({ variant = "inline", title, description, formLabel }: ConversionFormProps) {
  if (variant === "sidebar") {
    return (
      <div
        className="bg-gradient-to-br from-cyan-50 to-white border-2 rounded-xl p-6 shadow-lg sticky top-24"
        style={{ borderColor: "#20B2AA" }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>

        <div
          className="min-h-[300px] bg-white border-2 border-dashed rounded-lg flex items-center justify-center"
          style={{ borderColor: "#20B2AA" }}
        >
          <div className="text-center p-6">
            <p className="text-[#008B8B] font-bold mb-4">🔌 {formLabel}</p>
            <p className="text-sm text-gray-600 mb-4">Paste your GHL embed code here</p>
            <a
              href="https://lp.premiumcleaningnj.com/#quote"
              className="inline-block bg-[#20B2AA] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a9a92] transition-all shadow-md"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="bg-gradient-to-br from-cyan-50 to-white border-2 rounded-xl p-8 shadow-lg mb-12"
      style={{ borderColor: "#20B2AA" }}
      id="ghl-slot-1"
    >
      <span className="text-xs text-[#008B8B] uppercase tracking-wider font-bold block mb-2">Free Assessment</span>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>

      <div
        className="min-h-[200px] bg-white border-2 border-dashed rounded-lg flex items-center justify-center"
        style={{ borderColor: "#20B2AA" }}
      >
        <div className="text-center p-8">
          <p className="text-[#008B8B] font-bold mb-4 text-lg">🔌 {formLabel}</p>
          <p className="text-sm text-gray-600 mb-4">Paste your GHL embed code here</p>
          <a
            href="https://lp.premiumcleaningnj.com/#quote"
            className="inline-block bg-[#20B2AA] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a9a92] transition-all shadow-md"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
