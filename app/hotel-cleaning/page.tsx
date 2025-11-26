import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Cleaning Services NJ & NY | Professional Hospitality Cleaning",
  description:
    "Professional hotel cleaning services in New Jersey and New York. Keep your hotel spotless with our dedicated cleaning teams specialized in hospitality standards.",
  keywords: "hotel cleaning NJ NY, hospitality cleaning services, hotel housekeeping New Jersey New York",
}

export default function HotelCleaningPage() {
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
                <h1>Keep Your Hotel Spotless with Our Professional Cleaning Services</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/H1.jpg"
                    alt="Professional hotel cleaning services"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  In the hospitality industry, cleanliness isn't just expected—it's demanded. Your guests judge your
                  hotel by the cleanliness of every surface they touch. Our professional cleaning services ensure your
                  property maintains the highest standards of hygiene and presentation.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Custom Hotel Cleaning Plan"
                  description="Tailored to your property size and guest volume."
                />

                <h2>Why Choose Us? More Than Cleaning. A Professional Standard.</h2>
                <p>
                  Hotels require consistency, reliability, and attention to detail. Our teams are trained specifically
                  for hospitality environments, understanding the unique challenges of maintaining guest rooms, common
                  areas, and back-of-house spaces to five-star standards.
                </p>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/K.jpg"
                    alt="Hotel room comparison showing professional cleaning standards"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>Comprehensive Hotel Cleaning Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Guest Rooms</h4>
                    <p className="text-gray-600">
                      Complete turndown service, linen changes, and deep cleaning to hotel industry standards.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Lobby & Common Areas</h4>
                    <p className="text-gray-600">
                      Maintain the first impression with spotless lobbies, hallways, and public spaces.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Conference & Event Spaces</h4>
                    <p className="text-gray-600">
                      Pre and post-event cleaning for meeting rooms, ballrooms, and banquet facilities.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Fitness & Pool Areas</h4>
                    <p className="text-gray-600">
                      Specialized cleaning for gyms, pools, and spa facilities with appropriate disinfectants.
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/C.jpg"
                    alt="Experience the Gold Standard in Cleanliness"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>What's Included in Our Hotel Cleaning Service?</h2>
                <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg mb-8">
                  <ul className="space-y-2">
                    <li>✓ Daily guest room turnover and deep cleaning</li>
                    <li>✓ Bathroom sanitization with hospital-grade disinfectants</li>
                    <li>✓ Linen and towel replacement</li>
                    <li>✓ Vacuum and floor care for all surfaces</li>
                    <li>✓ Dusting and surface cleaning</li>
                    <li>✓ Window and mirror cleaning</li>
                    <li>✓ Public area maintenance throughout the day</li>
                    <li>✓ Trash removal and amenity restocking</li>
                    <li>✓ Special attention to high-touch surfaces</li>
                  </ul>
                </div>

                <section className="mt-16">
                  <h2>Hotel Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you scale services for occupancy changes?</span>
                    <p>
                      Absolutely. We understand occupancy fluctuates. Our flexible staffing model allows us to scale up
                      during peak seasons and adjust during slower periods.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Do you provide emergency cleaning services?</span>
                    <p>
                      Yes! We offer emergency response for urgent situations like spills, accidents, or last-minute
                      event preparations. Our team is available 24/7.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Are your staff trained in hospitality standards?</span>
                    <p>
                      All our hotel cleaning staff undergo specialized hospitality training and are background-checked.
                      They understand guest privacy, discretion, and five-star service expectations.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you help maintain our brand standards?</span>
                    <p>
                      Yes! We work with hotel management to understand and implement your specific brand standards,
                      SOPs, and guest experience requirements.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Schedule a Property Assessment"
                    description="We'll tour your hotel and create a customized cleaning program."
                  />
                </div>

                <div className="mt-8 bg-gradient-to-br from-[var(--brand-teal-dark)] to-[#004d55] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-white">Related Services</h4>
                  <ul className="space-y-3">
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
                    <li>
                      <Link
                        href="/tile-grout-cleaning"
                        className="text-white hover:text-[var(--brand-teal-light)] underline"
                      >
                        Floor & Grout Cleaning
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
