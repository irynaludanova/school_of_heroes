import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/components/Header"

export const metadata: Metadata = {
  title: {
    default: "Школа Героїв",
    template: "%s | Школа Героїв",
  },
  description:
    "Школа Героїв - зустрічі дітей та спікерів. Беремо актовий зал школи і групу 20-50 дітей віком 14-17 років. І запрошуємо 10-20 спікерів.",
  keywords: "школа героїв, освіта, спікери, діти, наставництво, Україна",
  openGraph: {
    title: "Школа Героїв",
    description:
      "Зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
    images: ["/images/main/offer.jpg"],
    url: "https://shkolaheroiiv.com.ua",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Школа Героїв",
    description:
      "Зустрічі дітей та спікерів для розвитку практики, наставників та фінансів.",
    images: ["/images/main/offer.jpg"],
  },
  alternates: {
    canonical: "https://shkolaheroiiv.com.ua",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Школа Героїв",
    url: "https://shkolaheroiiv.com.ua",
    description:
      "Non-profit освітня організація для зустрічей дітей та спікерів в Україні.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
      addressLocality: "Київ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380-98-978-97-88",
      contactType: "customer support",
    },
  }

  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        <main className="mx-auto">
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
