import Link from "next/link"

const services = [
  { name: "Office Cleaning", href: "/office-cleaning" },
  { name: "Window Cleaning", href: "/window-cleaning" },
  { name: "Carpet Cleaning", href: "/carpet-cleaning" },
  { name: "Tile & Grout Cleaning", href: "/tile-grout-cleaning" },
  { name: "Restaurant Cleaning", href: "/restaurant-cleaning" },
  { name: "Hotel Cleaning", href: "/hotel-cleaning" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#008B8B] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-[#20B2AA] text-xl font-bold mb-6">Premium Cleaning NJ & NY</h4>
            <p className="text-gray-300 leading-relaxed">
              Setting the standard for commercial facility maintenance in New Jersey and New York.
            </p>
          </div>

          <div>
            <h4 className="text-[#20B2AA] text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#20B2AA] text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>New Jersey & New York, USA</li>
              <li>
                <a href="tel:+19732042310" className="hover:text-white transition-colors">
                  (973) 204-2310
                </a>
              </li>
              <li>
                <a href="mailto:office@premiumccs.com" className="hover:text-white transition-colors">
                  office@premiumccs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-4">
          <p className="text-gray-400 text-sm text-center mb-2">Serving New Jersey and New York</p>
        </div>

        <div className="text-center">
          <p className="text-gray-400">&copy; 2025 Premium Cleaning NJ & NY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
