import Image from "next/image"
import speakerContributions from "../data/contributors.json"
import Button from "@/components/Button"
import "./globals.css"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "Головна - Школа Героїв",
  description:
    "Школа Героїв - зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
  keywords: "школа героїв, освіта, спікери, діти, наставництво",
  openGraph: {
    title: "Головна - Школа Героїв",
    description:
      "Беремо актовий зал школи і групу дітей. Запрошуємо спікерів для спілкування.",
    images: ["/images/main/offer.jpg"],
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Головна - Школа Героїв",
    description:
      "Беремо актовий зал школи і групу дітей. Запрошуємо спікерів для спілкування.",
    images: ["/images/main/offer.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Головна сторінка Школи Героїв",
    description:
      "Зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
    url: "https://school-of-heroes.vercel.app/",
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="parallax-hero h-[300px] sm:h-[500px] w-full relative" />

      <section className="max-w-4xl mx-auto py-8 px-4 sm:py-12 sm:px-6 text-center pt-[80px] sm:pt-[120px]">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
          Школа Героїв - зустрічі дітей та спікерів
        </h1>
        <p className="text-base leading-relaxed sm:text-lg">
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

      <section className="max-w-4xl px-4 py-8 mx-auto sm:px-6 sm:py-10">
        <h2 className="mb-4 text-xl font-bold text-center sm:text-2xl">
          Відео, як все відбувається
        </h2>
        <div className="aspect-video">
          <Suspense fallback={<div>Завантаження відео...</div>}>
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://drive.google.com/file/d/1b-XoOPiOd6KZRMjyDiBCxdyKcnaO8x9t/preview"
              title="Відео о Школі Героїв"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Suspense>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
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
                  quality={75}
                />
                <h3 className="mb-2 text-base font-semibold sm:text-lg">
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

      <section className="max-w-4xl px-4 py-8 mx-auto sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold text-center sm:text-2xl">
          Кейс одного з підлітків
        </h2>
        <div className="aspect-video">
          <Suspense fallback={<div>Завантаження відео...</div>}>
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://drive.google.com/file/d/1b-XoOPiOd6KZRMjyDiBCxdyKcnaO8x9t/preview"
              title="Кейс підлітка"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Suspense>
        </div>
      </section>

      <section className="max-w-4xl px-4 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          Головна ідея - дати дітям практику, наставників та фінанси для
          розвитку
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          За один рік 25 дітей відвідали 40 зустрічей. В результаті діти
          отримали 1,1 млн. гривень, 600+ спікерів, 10.000+ годин практики.
          Найбільший результат, коли учень отримав 10 тис дол на розробку
          беспілотника, стажування і роботу інженера в IT-компанії
        </p>
      </section>

      <section className="relative h-[300px] sm:h-[400px] w-full">
        <Image
          src="/images/main/main.jpg"
          alt="Школа Героїв - головне зображення"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1280px"
          quality={75}
        />
      </section>

      <section id="contacts" className="py-8 mb-12 bg-gray-100 sm:py-12">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">Контакти</h2>
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
