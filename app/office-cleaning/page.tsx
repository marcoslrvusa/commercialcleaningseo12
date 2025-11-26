import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Office Cleaning Services NJ & NY | Janitorial Contractors",
  description:
    "Reliable Commercial Office Cleaning in NJ & NY. Custom janitorial plans, green cleaning, and porter services for corporate offices, medical facilities, and banks.",
  keywords: "office cleaning NJ NY, janitorial services, commercial office cleaning New Jersey New York",
}

export default function OfficeCleaningPage() {
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
                <h1>Professional Commercial Office Cleaning in NJ & NY</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/D.jpg"
                    alt="Professional office cleaning services in NJ & NY"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  In today's competitive market, your New Jersey or New York office isn't just a workspace. It's a tool
                  for recruitment, retention, and productivity. A professional, healthy environment sends a clear message to your team and your clients: you value excellence.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Tailored Janitorial Plan"
                  description='Stop paying for "one-size-fits-all cleaning". Get a plan built for your facility.'
                />

                <h2>Your 4-Step Onboarding: The Path to Reliability</h2>
                <ol className="space-y-4 mb-8 pl-6">
                  <li className="text-lg">
                    <strong>Facility Assessment:</strong> We identify high-traffic zones and security protocols.
                  </li>
                  <li className="text-lg">
                    <strong>The Tailored Plan:</strong> You receive a checklist detailing daily, weekly, and monthly
                    tasks.
                  </li>
                  <li className="text-lg">
                    <strong>Team Integration:</strong> Dedicated, background-checked, uniformed staff. No rotating
                    strangers.
                  </li>
                  <li className="text-lg">
                    <strong>Proactive Management:</strong> Digital inspections ensure quality before you arrive.
                  </li>
                </ol>

                <h2>Specialized Janitorial Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Medical & Dental</h4>
                    <p className="text-gray-600">Terminal cleaning protocols and HIPAA-compliant discretion.</p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Corporate HQ</h4>
                    <p className="text-gray-600">"Class A" service for lobbies, boardrooms, and executive suites.</p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Financial Institutions</h4>
                    <p className="text-gray-600">Security-cleared teams for banks and investment firms.</p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Retail & Showrooms</h4>
                    <p className="text-gray-600">Customer-facing spaces that demand perfection.</p>
                  </div>
                </div>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/G.jpg"
                    alt="Office cleaning service in progress"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2>What's Included in Our Office Cleaning Service?</h2>
                <div className="bg-cyan-50 border-l-4 border-[var(--brand-teal-dark)] p-6 rounded-r-lg mb-8">
                  <ul className="space-y-2">
                    <li>✓ Daily trash removal and recycling management</li>
                    <li>✓ Restroom sanitization with hospital-grade disinfectants</li>
                    <li>✓ Kitchen and break room deep cleaning</li>
                    <li>✓ Dusting of all surfaces, including high areas</li>
                    <li>✓ Vacuuming and mopping of all floor types</li>
                    <li>✓ Glass and mirror cleaning</li>
                    <li>✓ Conference room setup and breakdown</li>
                  </ul>
                </div>

                <section className="mt-16">
                  <h2>Office Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: Is carpet cleaning included in daily service?</span>
                    <p>
                      Daily vacuuming is included. For deep restoration, we recommend our quarterly{" "}
                      <Link href="/carpet-cleaning" className="font-semibold underline">
                        commercial carpet cleaning service
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Do you offer green cleaning options?</span>
                    <p>
                      Yes! We use EPA-certified green cleaning products that are safe for employees, clients, and the
                      environment while maintaining the highest cleaning standards.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Can you clean outside of business hours?</span>
                    <p>
                      Absolutely. Most of our office cleaning is performed after hours (evenings or weekends) to
                      minimize disruption to your operations.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Schedule a Walkthrough"
                    description="We'll visit your site and give you a precise monthly quote."
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
