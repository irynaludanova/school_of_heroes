import Image from "next/image"
import sponsors from "../../data/sponsors.json"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "Спонсори - Школа Героїв",
  description:
    "Перші спонсори 2024 для Школи Героїв. Донати для безкоштовної участі дітей.",
  keywords: "спонсори, Школа Героїв, донати, 2024",
  openGraph: {
    title: "Спонсори - Школа Героїв",
    description: "Спонсори, які підтримують освіту дітей.",
    images: ["/images/main/symbols.jpg"],
    url: "/sponsors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Спонсори - Школа Героїв",
    description: "Спонсори, які підтримують освіту дітей.",
    images: ["/images/main/symbols.jpg"],
  },
  alternates: {
    canonical: "/sponsors",
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
      <section className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 text-center pt-[80px] sm:pt-[120px]">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
          Перші спонсори 2024
        </h1>
        <p className="text-base leading-relaxed sm:text-lg">
          Школа Героїв працює на основі донатів, і це дає можливість
          безкоштовної участі для дітей.
        </p>
      </section>

      <section className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:py-12">
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
                quality={75}
              />
              <h3
                className="mb-2 text-base font-semibold sm:text-lg"
                itemProp="name"
              >
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
