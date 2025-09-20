import Image from "next/image"
import { speakerContributions } from "../data/contributors.json"
import Button from "@/components/Button"
import "./globals.css"

export const metadata = {
  title: "Головна - Школа Героїв",
  description:
    "Школа Героїв - зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
  openGraph: {
    title: "Головна - Школа Героїв",
    description:
      "Беремо актовий зал школи і групу дітей. Запрошуємо спікерів для спілкування.",
    images: ["/images/main/offer.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua/",
  },
}

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Головна сторінка Школи Героїв",
    description:
      "Зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
    url: "https://shkolaheroiiv.com.ua/",
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="parallax-hero h-[500px] w-full relative" />

      <section className="max-w-4xl mx-auto py-12 px-6 text-center pt-[120px]">
        <h1 className="mb-6 text-3xl font-bold">
          Школа Героїв - зустрічі дітей та спікерів
        </h1>
        <p className="text-lg leading-relaxed">
          Беремо актовий зал школи і групу 20-50 дітей віком 14-17 років. І
          запрошуємо 10-20 спікерів. Спікери - це підприємці та фахівці з різних
          сфер. На початку діти зі сцени презентують, чим захоплюються. Кожен
          спікер каже пару слів про себе. І далі всі розходяться по залу, діти
          підходять до того чи іншого спікера і спілкуються. В кінці зустрічі
          спікери відмічають, що можуть запропонувати дітям - наставник,
          спонсор, стажування, робота тощо. Так діти знаходять для себе
          практику, наставників та гроші.
        </p>
      </section>

      <section className="max-w-4xl px-6 py-10 mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Відео, як все відбувається
        </h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/1b-XoOPiOd6KZRMjyDiBCxdyKcnaO8x9t/preview"
            title="Відео о Школі Героїв"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-8 text-2xl font-bold">
            Після кожної зустрічі спікери відмічають, чим можуть допомогти дітям
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {speakerContributions.map((contribution) => (
              <div
                key={contribution.id}
                className="p-6 bg-white rounded-lg shadow"
              >
                <Image
                  src={contribution.icon}
                  alt={contribution.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="mb-2 text-lg font-semibold">
                  {contribution.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {contribution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl px-6 py-12 mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Кейс одного з підлітків
        </h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/1b-XoOPiOd6KZRMjyDiBCxdyKcnaO8x9t/preview"
            title="Кейс підлітка"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="max-w-4xl px-6 py-12 mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold">
          Головна ідея - дати дітям практику, наставників та фінанси для
          розвитку
        </h2>
        <p className="text-lg leading-relaxed">
          За один рік 25 дітей відвідали 40 зустрічей. В результаті діти
          отримали 1,1 млн. гривень, 600+ спікерів, 10.000+ годин практики.
          Найбільший результат, коли учень отримав 10 тис дол на розробку
          беспілотника, стажування і роботу інженера в IT-компанії
        </p>
      </section>

      <section className="relative h-[400px] w-full">
        <Image
          src="/images/main/main.jpg"
          alt="Школа Героїв - головне зображення"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section id="contacts" className="py-12 mb-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold">Контакти</h2>
          <p>Школа Героїв</p>
          <p>098-978-97-88</p>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFWj2d26RSk-YsD6y-cZ5LLBPZFYwY-bUlivo6ZeYZ2M8GfQ/viewform"
            variant="solid"
            className="mt-8"
          >
            Записатись
          </Button>
        </div>
      </section>
    </div>
  )
}
