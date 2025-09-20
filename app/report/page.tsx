import Image from "next/image"
import "@/app/globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Звіт - Серпень 2025 - Школа Героїв",
  description:
    "Результати Школи Героїв за серпень 2025: команда, сайт, спонсори.",
  keywords: "звіт, Школа Героїв, серпень 2025, результати",
  openGraph: {
    title: "Звіт - Серпень 2025 - Школа Героїв",
    description: "Детальний звіт про досягнення за серпень 2025.",
    images: ["/images/main/author.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua/report",
  },
}

export default function Report() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Серпень 2025 Результати",
    datePublished: "2025-08-31",
    author: {
      "@type": "Person",
      name: "Андрій Пушкар",
    },
    publisher: {
      "@type": "Organization",
      name: "Школа Героїв",
    },
    description: "Звіт про команду, сайт, спонсорів та плани.",
    url: "https://shkolaheroiiv.com.ua/report",
  }

  return (
    <div className="w-full mx-auto text-gray-900 bg-white sm:w-1/2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center pt-[100px] sm:pt-[160px]">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Серпень 2025 Результати
        </h1>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Про команду
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          В команді 60 нових учасників стажируються, і 50 олдів, хто залишився
          після півроку роботи. Новачки показують круті результати по пошуку
          спікерів. Є нові управлінці, сподіваюсь, налагодимо систему. Ми
          запрошуємо спікерів на ознайомчий зум, після зуму спікери відмічають,
          чим можуть допомогти дітям. І далі запрошуємо спікерів в школи.
          Забронювали перші дати в школах.
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Про сайт
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          Буксуємо по сайту. Дизайн і бекенд все готово, але відстаємо фронтенд,
          андроїд і айос. Наші програмісти зараз загружені своєю основною
          роботою, і не вистачає часу на Школу Героїв. Продовжую шукати ще
          розробників. Гарна новина, що знайшли тестувальника з досвідом 7
          років.
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Знайшли спонсора 20.000 грн на місяць, Харків
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          Ознайомчі зуми для спікерів дають свої результати. Перший великий
          спонсор 20.000 грн. І 70 з 200 спікерів, що побували на зумі,
          відмітили, що хочуть задонатити на роботу Школи Героїв. Також кожен
          третій відмічає спонсорство дітям, 70% наставництво, 50% робота і
          стажування для підлітків. Зараз опрацьовуємо анкети.
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Раз на тиждень кожен учасник команди звітує про результати
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          Налаштовуємо графік, коли ми з кожним заходимо в зум і підводимо
          підсумки раз на тиждень, в групах по 5-10 людей, це дає змогу точно
          розуміти темп роботи.
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
          Починаю навчати дітей в школах
        </h2>
        <p className="text-base leading-relaxed sm:text-lg">
          На вересень заплановані уроки з дітьми по всій Україні онлайн.
          Навчатиму дітей, як організувати Школу Героїв у себе в школі.
          Побачимо, як будуть набиратись діти-лідери.
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <div className="relative w-3/4 h-auto mx-auto">
          <Image
            src="/images/main/author.jpg"
            alt="Автор звіту Школа Героїв"
            width={1280}
            height={720}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover w-3/4 h-auto mx-auto"
          />
        </div>
      </section>
      <section className="max-w-6xl px-8 py-2 mx-auto text-center sm:px-6 sm:py-4">
        <p className="text-base font-bold leading-relaxed sm:text-lg">
          Дякую, що довіряєте!
        </p>
      </section>

      <section className="max-w-6xl px-8 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <div className="relative w-1/2 h-auto mx-auto mb-12">
          <Image
            src="/images/main/symbols.jpg"
            alt="Символи Школи Героїв"
            width={1280}
            height={720}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover w-1/2 h-auto mx-auto"
          />
        </div>
      </section>
    </div>
  )
}
