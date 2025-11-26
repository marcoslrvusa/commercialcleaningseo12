import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Cleaning Services NJ & NY | Professional Night Shift Cleaning",
  description:
    "Professional restaurant cleaning services in New Jersey and New York. Night shift cleaning for floors, restrooms, and kitchen areas to keep your space spotless and compliant.",
  keywords: "restaurant cleaning NJ NY, commercial kitchen cleaning, night shift cleaning New Jersey New York",
}

export default function RestaurantCleaningPage() {
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
                <h1>Your Restaurant, Spotless Before the Guests Arrive</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/A.jpg"
                    alt="Restaurant being cleaned before guests arrive"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  From floors to restrooms, our night shifts keep your space clean and compliant. A spotless restaurant
                  isn't just about aesthetics—it's about health codes, guest satisfaction, and your reputation.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Custom Restaurant Cleaning Plan"
                  description="Tailored to your kitchen, dining area, and high-traffic zones."
                />

                <h2>Why Choose Our Restaurant Cleaning Service?</h2>
                <p>
                  Restaurants operate on tight schedules with zero tolerance for disruption. Our night shift teams work
                  while you're closed, ensuring every surface is sanitized and every corner is spotless before your
                  first customer walks in.
                </p>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/F.jpg"
                    alt="Professional restaurant cleaning with certified crews"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>Comprehensive Restaurant Cleaning Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Kitchen & Food Prep Areas</h4>
                    <p className="text-gray-600">
                      Deep cleaning of food prep surfaces, equipment, and floors following health department standards.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Dining Room & Bar</h4>
                    <p className="text-gray-600">
                      Complete cleaning of tables, chairs, booths, and bar areas to maintain a welcoming atmosphere.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Restrooms</h4>
                    <p className="text-gray-600">
                      Hospital-grade sanitization of all restroom facilities ensuring compliance and guest comfort.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Floor Care</h4>
                    <p className="text-gray-600">
                      Specialized cleaning for tile, grout, and anti-slip surfaces common in food service environments.
                    </p>
                  </div>
                </div>

                <h2>What's Included in Our Restaurant Cleaning?</h2>
                <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg mb-8">
                  <ul className="space-y-2">
                    <li>✓ Nightly floor mopping and sanitization</li>
                    <li>✓ Kitchen equipment and surface degreasing</li>
                    <li>✓ Restroom deep cleaning and restocking</li>
                    <li>✓ Dining area table and chair sanitization</li>
                    <li>✓ Trash removal and disposal</li>
                    <li>✓ Window and glass cleaning</li>
                    <li>✓ High-touch surface disinfection</li>
                    <li>✓ Compliance with local health codes</li>
                  </ul>
                </div>

                <section className="mt-16">
                  <h2>Restaurant Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: Do you clean during or after business hours?</span>
                    <p>
                      We primarily clean after hours to avoid disrupting your operations. Our night shift teams work
                      efficiently to have everything spotless before you open.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Are your cleaning products food-safe?</span>
                    <p>
                      Yes! We use EPA-registered, food-safe cleaning and sanitizing products that meet all health
                      department requirements for food service environments.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you handle grease buildup in kitchen areas?</span>
                    <p>
                      Absolutely. We use professional-grade degreasers and specialized equipment to tackle heavy grease
                      buildup on floors, walls, and equipment surfaces.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Do you provide deep cleaning services?</span>
                    <p>
                      Yes! In addition to nightly cleaning, we offer periodic deep cleaning services for exhaust hoods,
                      walk-in coolers, and other areas requiring intensive maintenance.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Schedule a Site Visit"
                    description="We'll assess your restaurant and provide a customized cleaning plan."
                  />
                </div>

                <div className="mt-8 bg-gradient-to-br from-[var(--brand-teal-dark)] to-[#004d55] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-white">Related Services</h4>
                  <ul className="space-y-3">
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
                    <li>
                      <Link
                        href="/office-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Office Cleaning
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
