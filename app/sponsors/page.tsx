import Image from "next/image"
import sponsors from "../../data/sponsors.json"
import "@/app/globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Спонсори - Школа Героїв",
  description:
    "Перші спонсори 2024 для Школи Героїв. Донати для безкоштовної участі дітей.",
  keywords: "спонсори, Школа Героїв, донати, 2024",
  openGraph: {
    title: "Спонсори - Школа Героїв",
    description: "Спонсори, які підтримують освіту дітей.",
    images: ["/images/main/symbols.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua/sponsors",
  },
}

export default function Sponsors() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sponsors.map((sponsor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: sponsor.name,
        jobTitle: sponsor.position,
        image: sponsor.image,
      },
    })),
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <section className="max-w-4xl mx-auto pb-12 px-6 text-center pt-[120px]">
        <h1 className="mb-6 text-3xl font-bold">Перші спонсори 2024</h1>
        <p className="text-lg leading-relaxed">
          Школа Героїв працює на основі донатів, і це дає можливість
          безкоштовної участі для дітей.
        </p>
      </section>

      <section className="max-w-6xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="p-6 text-center bg-white rounded-lg shadow"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Image
                src={sponsor.image}
                alt={`Спонсор ${sponsor.name}`}
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover w-full h-auto mb-3 aspect-square"
              />
              <h3 className="mb-2 text-lg font-semibold" itemProp="name">
                {sponsor.name}
              </h3>
              <p className="text-sm text-gray-600" itemProp="jobTitle">
                {sponsor.position}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
