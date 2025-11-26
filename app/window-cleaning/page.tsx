import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GHLForm } from "@/components/ghl-form"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Window Cleaning NJ & NY | Interior & Exterior Glass Cleaning",
  description:
    "Professional commercial window cleaning in New Jersey and New York. Professional-grade squeegees and eco-friendly solutions to clean your windows by hand.",
  keywords: "window cleaning NJ NY, commercial window cleaning, window cleaning New Jersey New York",
}

export default function WindowCleaningPage() {
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
                <h1>Commercial Window Cleaning Services in NJ & NY</h1>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-8 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/J.jpg"
                    alt="Professional window cleaning on commercial building"
                    fill
                    className="object-contain"
                  />
                </div>

                <p>
                  A Clean Office is a Productive Office A spotless workplace does more than just look good—it sets the tone for your team's performance. We maintain a healthy, organized environment so you can focus on growing your business, not managing the mess.
                </p>

                <GHLForm
                  variant="inline"
                  title="Get a Window Cleaning Quote"
                  description="Tell us about your building and we'll provide a detailed estimate."
                />

                <h2>Our Window Cleaning Process</h2>
                <div className="space-y-6 mb-12">
                  <div className="bg-white border-l-4 border-[var(--brand-teal-light)] p-6 rounded-r-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-2">1. Safety Assessment</h4>
                    <p className="text-gray-600">
                      We evaluate access points, building height, and environmental factors to create a comprehensive
                      safety plan.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[var(--brand-teal-light)] p-6 rounded-r-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-2">2. Traditional Hand Detailing</h4>
                    <p className="text-gray-600">
                      We use professional-grade squeegees and eco-friendly solutions to clean your windows by hand. This traditional method allows for close inspection and ensures a streak-free finish that automated systems often miss.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[var(--brand-teal-light)] p-6 rounded-r-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-2">3. Professional Cleaning</h4>
                    <p className="text-gray-600">
                      Using professional squeegees and safe extension tools, we clean every pane to perfection.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[var(--brand-teal-light)] p-6 rounded-r-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-2">4. Quality Inspection</h4>
                    <p className="text-gray-600">
                      Final walkthrough ensures every window meets our exacting standards.
                    </p>
                  </div>
                </div>

                <h2>Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Low-Rise & Storefront Expertise</h4>
                    <p className="text-gray-600">
                     Focused on retail storefronts and low-rise office buildings. We deliver crystal-clear results using safe, ground-based methods and ladders, ensuring your business makes the perfect first impression without the complexity of heavy machinery.
                    </p>
                  </div>
                  <div className="service-card">
                    <h4 className="text-xl font-bold mb-3">Low-Rise Buildings</h4>
                    <p className="text-gray-600">
                      Water-fed pole systems reach up to 60 feet from the ground, eliminating the need for ladders in
                      many cases.
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-48 md:h-64 lg:h-80 my-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/E.jpg"
                    alt="Clean commercial windows reflecting blue sky"
                    fill
                    className="object-contain"
                  />
                </div>

                <section className="mt-16">
                  <h2>Window Cleaning FAQs</h2>

                  <div className="faq-item">
                    <span className="faq-question">Q: How often should commercial windows be cleaned?</span>
                    <p>
                      Most businesses benefit from quarterly cleaning. High-traffic retail locations may need monthly
                      service, while office buildings in less polluted areas can go 6 months between cleanings.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Do you clean interior windows too?</span>
                    <p>
                      Yes! We offer both interior and exterior window cleaning. Interior service is especially important
                      for conference rooms and customer-facing areas.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: What about hard water stains?</span>
                    <p>
                      Hard water stains require specialized treatment. We use acidic cleaners and fine abrasives to
                      restore glass clarity without scratching.
                    </p>
                  </div>

                  <div className="faq-item">
                    <span className="faq-question">Q: Is your team insured?</span>
                    <p>
                      Absolutely. We carry comprehensive general liability and workers' compensation insurance.
                      Certificates of insurance are provided upon request.
                    </p>
                  </div>
                </section>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto">
                  <GHLForm
                    variant="sidebar"
                    title="Request a Site Visit"
                    description="We'll assess your building and provide a detailed quote."
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
