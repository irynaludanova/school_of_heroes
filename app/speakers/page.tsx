import Image from "next/image"
import speakers from "../../data/speakers.json"
import "@/app/globals.css"
import Button from "@/components/Button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "Спікери - Школа Героїв",
  description:
    "Приклади спікерів, які діляться досвідом з дітьми в Школі Героїв.",
  keywords: "спікери, Школа Героїв, фахівці, підприємці",
  openGraph: {
    title: "Спікери - Школа Героїв",
    description: "Більше 2000 спікерів для дітей.",
    images: ["/images/main/author.jpg"],
    url: "/speakers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Спікери - Школа Героїв",
    description: "Більше 2000 спікерів для дітей.",
    images: ["/images/main/author.jpg"],
  },
  alternates: {
    canonical: "/speakers",
  },
}

export default function Speakers() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: speakers.map((speaker, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: speaker.name,
        jobTitle: speaker.position,
        image: speaker.image,
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
          Приклади спікерів
        </h1>
        <p className="text-base leading-relaxed sm:text-lg">
          До дітей прийшли більше 2000 спікерів. Це спеціалісти та підприємці,
          які діляться досвідом з дітьми на добровільній основі.
        </p>
      </section>

      <section className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="p-6 text-center bg-white rounded-lg shadow"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Image
                src={speaker.image}
                alt={`Спікер ${speaker.name}`}
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
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600" itemProp="jobTitle">
                {speaker.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl px-4 py-8 mx-auto mb-12 text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          Вас можна запросити до дітей?
        </h2>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          Чи можна Вас запросити до дітей, поспілкуватись та поділитись досвідом
          у форматі бесіди `запитання-відповідь`? Ви пару слів про себе, і далі
          діти запитують про діяльність, професію, просто за життя. Можна обрати
          зручний формат - один спікер, група спікерів, наставник, екскурсія,
          стажування та інші.
        </p>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4lcJN86tP1QKRAZLSZBssvwN7nSiLE3iBTUo7_HhQ450cUA/viewform"
          variant="outline"
          aria-label="Записатись в спікери"
        >
          Записатись в спікери
        </Button>
      </section>
    </div>
  )
}
