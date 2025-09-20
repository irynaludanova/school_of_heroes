import type { Metadata } from "next"
import { Header } from "@/components/Header"

export const metadata: Metadata = {
  metadataBase: new URL("https://school-of-heroes.vercel.app"),
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
    url: "/",
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
    canonical: "/",
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
    url: "https://school-of-heroes.vercel.app",
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
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link rel="preload" href="/_next/static/css/app/page.css" as="style" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
          body { font-family: 'Roboto', sans-serif; margin: 0; padding: 0; color: #333333; background-color: #ffffff; line-height: 1.5; font-display: swap; }
          h1 { font-size: 2.25rem; font-weight: 700; color: #202124; }
          @media (min-width: 768px) { h1 { font-size: 3.5rem; } }
          .parallax-hero { background-image: url("/images/main/offer.jpg"); background-size: cover; background-position: center; background-attachment: fixed; height: 100vh; position: relative; }
        `,
          }}
        />

        <link
          rel="preload"
          href="/fonts/Roboto-Regular.ttf"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Medium.ttf"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Bold.ttf"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-slate-900"
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  )
}
