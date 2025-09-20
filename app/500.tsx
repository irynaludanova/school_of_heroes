import type { Metadata } from "next"
import "@/app/globals.css"
import Button from "@/components/Button"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
  title: "500 - Помилка сервера - Школа Героїв",
  description:
    "Сталася помилка сервера. Спробуйте ще раз або зв'яжіться з нами.",
  keywords: "500, Школа Героїв, помилка сервера",
  openGraph: {
    title: "500 - Помилка сервера - Школа Героїв",
    description: "Сталася помилка сервера. Поверніться на головну.",
    images: ["/images/main/offer.jpg"],
    url: "/500",
  },
  twitter: {
    card: "summary_large_image",
    title: "500 - Помилка сервера - Школа Героїв",
    description: "Сталася помилка сервера. Поверніться на главную.",
    images: ["/images/main/offer.jpg"],
  },
  alternates: {
    canonical: "/500",
  },
}

export default function ServerError() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "500 - Помилка сервера",
    description: "Сталася помилка сервера.",
    url: "https://school-of-heroes.vercel.app/500",
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="max-w-4xl px-4 mx-auto text-center sm:px-6">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          500 - Помилка сервера
        </h1>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          Вибачте, сталася помилка на сервері. Спробуйте оновити сторінку або
          зв`яжіться з нами.
        </p>
        <Button href="/" variant="solid" aria-label="Повернутися на головну">
          На головну
        </Button>
        <p className="mt-8 text-base sm:text-lg">
          Зв`яжіться з нами:{" "}
          <a href="tel:+380989789788" className="text-blue-600 hover:underline">
            098-978-97-88
          </a>
        </p>
      </section>
    </div>
  )
}
