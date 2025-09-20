import Image from "next/image"
import speakers from "../../data/speakers.json"
import "@/app/globals.css"
import Button from "@/components/Button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Спікери - Школа Героїв",
  description:
    "Приклади спікерів, які діляться досвідом з дітьми в Школі Героїв.",
  keywords: "спікери, Школа Героїв, фахівці, підприємці",
  openGraph: {
    title: "Спікери - Школа Героїв",
    description: "Більше 2000 спікерів для дітей.",
    images: ["/images/main/author.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua/speakers",
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
      <section className="max-w-4xl mx-auto pb-12 px-6 text-center pt-[120px]">
        <h1 className="mb-6 text-3xl font-bold">Приклади спікерів</h1>
        <p className="text-lg leading-relaxed">
          До дітей прийшли більше 2000 спікерів. Це спеціалісти та підприємці,
          які діляться досвідом з дітьми на добровільній основі.
        </p>
      </section>

      <section className="max-w-6xl px-6 py-12 mx-auto">
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
              />
              <h3 className="mb-2 text-lg font-semibold" itemProp="name">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600" itemProp="jobTitle">
                {speaker.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl px-6 py-12 mx-auto mb-12 text-center">
        <h2 className="mb-6 text-2xl font-bold">
          Вас можна запросити до дітей?
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Чи можна Вас запросити до дітей, поспілкуватись та поділитись досвідом
          у форматі бесіди `запитання-відповідь`? Ви пару слів про себе, і далі
          діти запитують про діяльність, професію, просто за життя. Можна обрати
          зручний формат - один спікер, група спікерів, наставник, екскурсія,
          стажування та інші.
        </p>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4lcJN86tP1QKRAZLSZBssvwN7nSiLE3iBTUo7_HhQ450cUA/viewform"
          variant="outline"
        >
          Записатись в спікери
        </Button>
      </section>
    </div>
  )
}
