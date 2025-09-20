import "@/app/globals.css"
import { buttons } from "../../data/donats.json"
import Button from "@/components/Button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Підтримати донатом - Школа Героїв",
  description:
    "Підтримайте Школу Героїв донатом. Карта та рахунок фонду для внесків.",
  keywords: "донат, підтримка, Школа Героїв, благодійність",
  openGraph: {
    title: "Підтримати донатом - Школа Героїв",
    description: "Допоможіть розвитку дітей через донати.",
    images: ["/images/main/symbols.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua/donate",
  },
}

export default function Donate() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Підтримати донатом",
    description: "Сторінка для донатів Школі Героїв.",
    url: "https://shkolaheroiiv.com.ua/donate",
  }

  return (
    <div className="text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="max-w-6xl mx-auto px-6 text-center pt-[100px] sm:pt-[160px]">
        <h1 className="mb-6 text-3xl font-bold">Підтримати донатом</h1>
        <div className="space-y-4 text-lg leading-relaxed">
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

      <section className="max-w-6xl px-6 py-12 mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold">Контакти</h2>
        <div className="space-y-2 text-lg leading-relaxed">
          <p>098-978-97-88</p>
          <p>
            Телеграм:{" "}
            <a
              href="https://t.me/AndriyPushkar"
              className="text-blue-600 hover:underline"
            >
              @AndriyPushkar
            </a>
          </p>
          <p>Андрій Пушкар</p>
          <p>Засновник Школи Героїв</p>
        </div>
      </section>

      <section className="flex flex-col justify-center max-w-6xl gap-4 px-6 py-12 mx-auto mb-12 text-center md:w-1/3 sm:w-full">
        {buttons.map((button) => (
          <Button key={button.id} href={button.href} variant="outline">
            {button.text}
          </Button>
        ))}
      </section>
    </div>
  )
}
