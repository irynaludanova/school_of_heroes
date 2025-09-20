import "@/app/globals.css"
import Button from "@/components/Button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "Вакансії - Школа Героїв",
  description:
    "Вакансії в Школі Героїв. Запис на ознайомчий зум та співбесіду.",
  keywords: "вакансії, Школа Героїв, команда, робота",
  openGraph: {
    title: "Вакансії - Школа Героїв",
    description: "Приєднайтеся до команди Школи Героїв.",
    images: ["/images/main/offer.jpg"],
    url: "/vacancies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Вакансії - Школа Героїв",
    description: "Приєднайтеся до команди Школи Героїв.",
    images: ["/images/main/offer.jpg"],
  },
  alternates: {
    canonical: "/vacancies",
  },
}

export default function Vacancies() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Вакансії Школи Героїв",
    description: "Інформація про вакансії та процес запису.",
    url: "https://school-of-heroes.vercel.app/vacancies",
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="parallax-hero h-[500px] w-full relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="white-frame">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              Вакансії
            </h1>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-8 px-4 sm:py-12 sm:px-6 text-center pt-[80px] sm:pt-[120px]">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Вакансії</h2>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          Запис в команду проходить в 2 етапи
        </p>
        <p className="text-base leading-relaxed sm:text-lg">
          Перший етап - ознайомчий зум. На зумі відповідаємо на всі запитання,
          розповідаємо про функціонал в Школі Героїв, як працює проєкт.
          Пояснюємо умови, що немає зарплати, і все залежить від донатів
          звичайних людей. Ваша задача - вирішити після ознайомчого зуму, чи
          підходять Вам умови і чи хочете записатись на співбесіду.
        </p>
      </section>

      <section className="max-w-6xl px-4 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLScUqamvve_Z8tPh9yIPBoSiBHHfDZUarkozsFTxcQBjog3NfA/viewform"
          variant="outline"
          aria-label="Запис на ознайомчий зум"
        >
          Запис на ознайомчий зум
        </Button>
      </section>

      <section className="max-w-6xl px-4 py-8 mx-auto mb-8 text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          Другий етап - пройти співбесіду
        </h2>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLScUqamvve_Z8tPh9yIPBoSiBHHfDZUarkozsFTxcQBjog3NfA/viewform"
          variant="outline"
          aria-label="Запис на співбесіду"
        >
          Запис на співбесіду
        </Button>
      </section>
    </div>
  )
}
