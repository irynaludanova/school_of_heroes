import "@/app/globals.css"
import buttons from "../../data/donats.json"
import Button from "@/components/Button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "Підтримати донатом - Школа Героїв",
  description:
    "Підтримайте Школу Героїв донатом. Карта та рахунок фонду для внесків.",
  keywords: "донат, підтримка, Школа Героїв, благодійність",
  openGraph: {
    title: "Підтримати донатом - Школа Героїв",
    description: "Допоможіть розвитку дітей через донати.",
    images: ["/images/main/symbols.jpg"],
    url: "/donate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Підтримати донатом - Школа Героїв",
    description: "Допоможіть розвитку дітей через донати.",
    images: ["/images/main/symbols.jpg"],
  },
  alternates: {
    canonical: "/donate",
  },
}

export default function Donate() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Підтримати донатом",
    description: "Сторінка для донатів Школі Героїв.",
    url: "https://school-of-heroes.vercel.app/donate",
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center pt-[80px] sm:pt-[160px]">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
          Підтримати донатом
        </h1>
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            <strong>Карта благодійного фонду:</strong>
            <br />
            5375414120347165
          </p>
          <p>
            <strong>Рахунок благодійного фонду:</strong>
            <br />
            UA593052990000026006006225853
          </p>
        </div>
      </section>

      <section className="max-w-6xl px-4 py-8 mx-auto text-center sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">Контакти</h2>
        <div className="space-y-2 text-base leading-relaxed sm:text-lg">
          <p>098-978-97-88</p>
          <p>
            Телеграм:{" "}
            <a
              href="https://t.me/AndriyPushkar"
              className="text-blue-600 hover:underline"
              aria-label="Зв'язатися через Telegram"
            >
              @AndriyPushkar
            </a>
          </p>
          <p>Андрій Пушкар</p>
          <p>Засновник Школи Героїв</p>
        </div>
      </section>

      <section className="flex flex-col justify-center max-w-6xl gap-4 px-4 py-8 mx-auto mb-12 text-center sm:px-6 sm:py-12 sm:w-full md:w-1/3">
        {buttons.map((button) => (
          <Button
            key={button.id}
            href={button.href}
            variant="outline"
            aria-label={button.text}
          >
            {button.text}
          </Button>
        ))}
      </section>
    </div>
  )
}
