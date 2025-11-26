import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCards } from "@/components/service-cards"
import { ObjectionBlocks } from "@/components/objection-blocks"
import { GHLForm } from "@/components/ghl-form"
import { QuotePopup } from "@/components/quote-popup"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Cleaning Services NJ & NY | Professional Janitorial & Facility Maintenance",
  description:
    "Premier Commercial Cleaning Services in New Jersey and New York. Specialized in Office Cleaning, Window Washing, Carpet Care, and Floor Restoration. Get a free quote.",
  openGraph: {
    title: "Commercial Cleaning Services NJ & NY | Premium Cleaning",
    description: "Professional commercial cleaning and janitorial services in New Jersey and New York.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <QuotePopup />

      <main className="pt-20">
        <HeroSection />

        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <article className="lg:col-span-2">
                <div className="relative w-full mb-8" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/3JqeXSlLuz0"
                    title="Premium Cleaning NJ - Professional Commercial Cleaning Services"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  More Than Just "Cleaning" – A Strategic Partnership
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  For leading New Jersey and New York businesses, facility maintenance is not an operational cost—it is
                  a strategic investment.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Premium Cleaning operates as your partner, protecting your most valuable assets: your people and your
                  reputation.
                </p>

                <div id="quote-section">
                  <GHLForm
                    variant="inline"
                    title="Ready to Elevate Your Facility Standards?"
                    description="Get a custom quote tailored to your square footage and industry needs."
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Navigate Our Specialized Commercial Cleaning Solutions
                </h2>
                <p className="text-lg text-gray-700 mb-8">
             We don't believe in "one-size-fits-all." Whether you run a busy restaurant or a quiet corporate office, our experienced teams deliver the specific level of care your facility needs.
                </p>

                <ServiceCards />

                <div className="my-12 relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/premium-1.png"
                    alt="Premium Cleaning team working in commercial space"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  />
                </div>

                <ObjectionBlocks />

                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "ProfessionalService",
                      name: "Premium Cleaning NJ & NY",
                      description:
                        "Professional commercial cleaning and janitorial services in New Jersey and New York.",
                      address: {
                        "@type": "PostalAddress",
                        addressRegion: "NJ, NY",
                        addressCountry: "US",
                      },
                      priceRange: "$$",
                      areaServed: [
                        {
                          "@type": "AdministrativeArea",
                          name: "New Jersey",
                        },
                        {
                          "@type": "AdministrativeArea",
                          name: "New York",
                        },
                      ],
                      serviceType: [
                        "Commercial Cleaning",
                        "Office Cleaning",
                        "Window Cleaning",
                        "Carpet Cleaning",
                        "Tile and Grout Cleaning",
                        "Restaurant Cleaning",
                        "Hotel Cleaning",
                      ],
                    }),
                  }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <GHLForm variant="sidebar" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
