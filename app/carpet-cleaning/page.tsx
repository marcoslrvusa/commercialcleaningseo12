import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Carpet Cleaning NJ & NY | Hot Water Extraction & Restoration",
  description:
    "Professional commercial carpet cleaning in New Jersey and New York. Industrial hot water extraction to extend carpet life and improve indoor air quality.",
  keywords: "carpet cleaning NJ NY, commercial carpet cleaning, hot water extraction New Jersey New York",
}

export default function CarpetCleaningPage() {
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
                <h1>Commercial Carpet Cleaning & Restoration in NJ & NY</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/commercial-cleaning.jpg"
                    alt="What sets us apart in commercial cleaning"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  Carpets in corporate settings act as filters, trapping pollutants, allergens, and bacteria. Without
                  regular deep cleaning, they become sources of poor indoor air quality and premature wear. Our
                  commercial carpet cleaning services utilize industrial-grade hot water extraction (HWE) to restore
                  carpets and extend their lifespan.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Carpet Cleaning Quote"
                  description="Tell us your square footage and we'll provide a detailed estimate."
                />

                <h2>Why Hot Water Extraction (HWE)?</h2>
                <p className="mb-6">
                  Also known as "steam cleaning," HWE is the gold standard recommended by carpet manufacturers. It's the
                  only method that truly removes embedded dirt, bacteria, and allergens from deep within carpet fibers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Deep Extraction</h4>
                    <p className="text-gray-600 text-sm">
                      Removes 98% of allergens and bacteria that vacuuming leaves behind.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Fast Drying</h4>
                    <p className="text-gray-600 text-sm">
                      Powerful extraction means carpets dry in 4-6 hours, not days.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Extends Carpet Life</h4>
                    <p className="text-gray-600 text-sm">
                      Regular HWE can double the lifespan of commercial carpeting.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg">
                    <h4 className="text-lg font-bold mb-2">Improves IAQ</h4>
                    <p className="text-gray-600 text-sm">
                      Removes pollutants that contribute to sick building syndrome.
                    </p>
                  </div>
                </div>

                <h2>Our Carpet Cleaning Process</h2>
                <ol className="space-y-4 mb-12 pl-6">
                  <li className="text-lg">
                    <strong>Pre-Inspection:</strong> We identify stains, high-traffic areas, and carpet type.
                  </li>
                  <li className="text-lg">
                    <strong>Pre-Treatment:</strong> Specialized solutions break down oils and embedded dirt.
                  </li>
                  <li className="text-lg">
                    <strong>Hot Water Extraction:</strong> Truck-mounted equipment injects hot water and extracts it
                    along with dirt.
                  </li>
                  <li className="text-lg">
                    <strong>Speed Drying:</strong> High-powered fans accelerate drying to minimize downtime.
                  </li>
                  <li className="text-lg">
                    <strong>Post-Grooming:</strong> Carpet fibers are groomed for uniform appearance and faster drying.
                  </li>
                </ol>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/carpet-commercial-cleaning-services.jpg"
                    alt="Professional carpet cleaning services in commercial setting"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>Stain Removal Expertise</h2>
                <p className="mb-6">
                  Not all stains are created equal. Our technicians are trained in advanced stain removal techniques
                  for:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Coffee and beverage spills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Ink and marker stains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Pet accidents and odors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Grease and oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Rust and oxidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-teal-light)] font-bold">✓</span>
                    <span>Chewing gum and adhesives</span>
                  </li>
                </ul>

                <section className="mt-16">
                  <h2>Carpet Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: How often should commercial carpets be cleaned?</span>
                    <p>
                      High-traffic areas should be cleaned every 3-6 months. Low-traffic areas can go 12 months. Regular
                      cleaning prevents permanent staining and extends carpet life.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Will cleaning void my carpet warranty?</span>
                    <p>
                      No—in fact, most carpet warranties require professional hot water extraction every 12-18 months.
                      We provide documentation for warranty compliance.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you clean carpets after hours?</span>
                    <p>
                      Yes! Most of our commercial carpet cleaning is performed evenings or weekends to avoid disrupting
                      your business operations.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Schedule Carpet Cleaning"
                    description="Get a quote based on your square footage and carpet type."
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
                        href="/tile-grout-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Floor & Grout Cleaning
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
