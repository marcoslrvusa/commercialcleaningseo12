import Link from "next/link"

const services = [
  {
    title: "Office Cleaning & Janitorial",
    description: "Daily protocols for health, productivity, and corporate image. Green cleaning options available.",
    href: "/office-cleaning",
    linkText: "Explore Office Plans →",
  },
  {
    title: "Commercial Window Cleaning",
    description:
      "Interior and exterior clarity. Safe and effective low-rise services delivered with hand-detailed care.",
    href: "/window-cleaning",
    linkText: "View Safety Protocols →",
  },
  {
    title: "Carpet Maintenance",
    description: "Extend asset life and improve IAQ with industrial Hot Water Extraction (HWE) restoration.",
    href: "/carpet-cleaning",
    linkText: "See Restoration Process →",
  },
  {
    title: "Floor & Grout Restoration",
    description: "Revitalize your floors with professional scrubbing and deep cleaning services. We remove embedded dirt and grime from tile and grout, restoring the fresh look of your lobbies and restrooms.",
    href: "/tile-grout-cleaning",
    linkText: "View Floor Services →",
  },
  {
    title: "Restaurant Cleaning",
    description: "Night shift cleaning to keep floors, restrooms, and kitchens spotless before guests arrive.",
    href: "/restaurant-cleaning",
    linkText: "View Restaurant Services →",
  },
  {
    title: "Hotel Cleaning",
    description: "Professional cleaning services to maintain spotless hotels with our dedicated team.",
    href: "/hotel-cleaning",
    linkText: "View Hotel Services →",
  },
]

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {services.map((service) => (
        <div
          key={service.href}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:border-[#20B2AA] flex flex-col"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
          <Link
            href={service.href}
            className="text-[#008B8B] font-semibold hover:text-[#20B2AA] transition-colors inline-flex items-center"
          >
            {service.linkText}
          </Link>
        </div>
      ))}
    </div>
  )
}
