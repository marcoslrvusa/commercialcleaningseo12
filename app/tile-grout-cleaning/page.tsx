import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Tile & Grout Cleaning NJ & NY | Floor Restoration Services",
  description:
    "Professional commercial tile, grout, and floor cleaning in New Jersey and New York. Revitalize your floors with professional scrubbing and deep cleaning services. We remove embedded dirt and grime from tile and grout, restoring the fresh look of your lobbies and restrooms",
  keywords: "tile cleaning NJ NY, grout cleaning, floor cleaning, stripping New Jersey New York",
}

export default function TileGroutCleaningPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        <div className="bg-white py-12">
          <div className="container-custom">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--brand-teal-light)] mb-8"
            >
              ← Back to Services Hub
            </Link>
          </div>
        </div>

        <div className="bg-white pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <h1>Commercial Tile, Grout & Floor Cleaning in NJ & NY</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/Q.jpg"
                    alt="Professional tile and grout cleaning services"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  High-traffic floors accumulate grime that daily mopping simply pushes around. Our commercial deep-cleaning services target embedded dirt in tile and grout lines, revitalizing your floors and creating a healthier, more professional environment for your staff and visitors.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Floor Cleaning Quote"
                  description="Tell us about your flooring and we'll provide a detailed estimate."
                />

                <h2>Our Floor Cleaning Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Tile & Grout Cleaning</h4>
                    <p className="text-gray-600">
                      High-pressure steam extraction removes years of buildup from ceramic, porcelain, and natural
                      stone.
                    </p>
                  </div>

                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Grout Sealing</h4>
                    <p className="text-gray-600">
                      Penetrating sealers protect grout from future staining and make maintenance easier.
                    </p>
                  </div>

                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Floor Scrubbing & Maintenance Body</h4>
                    <p className="text-gray-600">
                      We use professional floor machines to deep clean high-traffic areas, removing scuffs, grease, and embedded soil that daily mopping leaves behind.
                    </p>
                  </div>
                </div>

                <h2>The Tile & Grout Cleaning Process</h2>
                <ol className="space-y-4 mb-12 pl-6">
                  <li className="text-lg">
                    <strong>Pre-Treatment:</strong> Alkaline cleaners break down grease and soil.
                  </li>
                  <li className="text-lg">
                    <strong>High-Pressure Extraction:</strong> 1200+ PSI steam lifts embedded dirt from grout lines.
                  </li>
                  <li className="text-lg">
                    <strong>Neutralization:</strong> pH-balanced rinse prevents residue buildup.
                  </li>
                  <li className="text-lg">
                    <strong>Sealing (Optional):</strong> Penetrating sealer protects grout for 1-2 years.
                  </li>
                  <li className="text-lg">
                    <strong>Final Inspection:</strong> Walkthrough ensures complete satisfaction.
                  </li>
                </ol>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/H.jpg"
                    alt="Before and after tile and grout cleaning results"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-8 rounded-r-lg mb-12">
                  <h4 className="text-xl font-bold mb-4">Recommended Schedule:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--brand-teal-light)] font-bold">→</span>
                      <div>
                        <strong>Daily:</strong> Dust mopping and spot cleaning
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--brand-teal-light)] font-bold">→</span>
                      <div>
                        <strong>Weekly:</strong> Damp mopping with neutral cleaner
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--brand-teal-light)] font-bold">→</span>
                      <div>
                        <strong>Monthly:</strong> Spray buffing to restore shine
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--brand-teal-light)] font-bold">→</span>
                      <div>
                        <strong>Quarterly:</strong> Top scrub and recoat
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--brand-teal-light)] font-bold">→</span>
                      <div>
                        <strong>Annually:</strong> Complete strip and wax
                      </div>
                    </li>
                  </ul>
                </div>

                <h2>Why Professional Floor Cleaning Matters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Safety</h4>
                    <p className="text-sm">
                      Dirty, worn floors are slip hazards. Proper maintenance reduces liability.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">First Impressions</h4>
                    <p className="text-sm">Lobby and entrance floors set the tone for your entire facility.</p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Asset Protection</h4>
                    <p className="text-sm">
                      Regular maintenance extends floor life by decades, saving replacement costs.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Hygiene</h4>
                    <p className="text-sm">Restroom floors harbor bacteria that daily mopping can't eliminate.</p>
                  </div>
                </div>

                <section className="mt-16">
                  <h2>Floor Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: How often should tile and grout be professionally cleaned?</span>
                    <p>
                      High-traffic areas (restrooms, lobbies) should be cleaned every 6-12 months. Low-traffic areas can
                      go 18-24 months between cleanings.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Will cleaning damage my natural stone floors?</span>
                    <p>
                      Not when done correctly! We use pH-neutral cleaners and appropriate pressure settings for each
                      stone type. Acidic cleaners and high pressure can damage marble and limestone—we never use them.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you clean colored grout?</span>
                    <p>
                      Yes! We adjust our cleaning methods and products to preserve colored grout while still achieving
                      deep cleaning results.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Schedule Floor Cleaning"
                    description="Get a quote for tile, grout, or maintenance."
                  />
                </div>

                <div className="mt-8 bg-gradient-to-br from-[var(--brand-teal-dark)] to-[#004d55] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-white">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/office-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Office Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/carpet-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Carpet Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/window-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Window Cleaning
                      </Link>
                    </li>
                  </ul>
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
