import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata optimized for Albanian market
export const metadata: Metadata = {
  // Basic Meta
  title: {
    default:
      "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri - Porosi nga Çadra",
    template: "%s | Shije Vere",
  },
  description:
    "Sistemi #1 i menusë dixhitale për plazhe në Shqipëri. Klientët porosisin pije dhe ushqime direkt nga çadra me kod QR. Rritni shitjet deri në 30x. Integrim WhatsApp. Provë falas!",

  // Keywords for Albanian market
  keywords: [
    // Primary Albanian keywords
    "menu dixhitale plazh",
    "porosi online plazh",
    "kod QR restoran",
    "menu elektronike",
    "porosi nga çadra",
    "sistem porosish plazh",
    "menu digitale shqiperi",
    "aplikacion porosi plazh",
    // Location-based
    "plazh shqiperi",
    "plazh durres",
    "plazh vlore",
    "plazh sarande",
    "plazh ksamil",
    "plazh himara",
    "plazh dhermi",
    "riviera shqiptare",
    // Business terms
    "biznes plazhi",
    "bar plazhi",
    "restoran plazhi",
    "beach bar albania",
    // Service terms
    "rrit shitjet plazh",
    "WhatsApp porosi",
    "menu pa kontakt",
    "sistem dixhital restoran",
  ],

  // Authors and Creator
  authors: [{ name: "Shije Vere", url: "https://shijevere.com" }],
  creator: "Shije Vere",
  publisher: "Shije Vere",

  // Canonical URL
  metadataBase: new URL("https://shijevere.com"),
  alternates: {
    canonical: "/",
    languages: {
      "sq-AL": "/",
      "en-US": "/en",
    },
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: "https://shijevere.com",
    siteName: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
    title: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
    description:
      "Transformoni biznesin tuaj të plazhit me menunë dixhitale. Klientët porosisin direkt nga çadra. Rritni shitjet deri në 30x këtë verë!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shije Vere - Menu Dixhitale për Plazhe",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
    description:
      "Sistemi #1 i menusë dixhitale për plazhe. Porosi nga çadra me kod QR. Provë falas!",
    images: ["/og-image.png"],
    creator: "@shijevere",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#06b6d4",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // App specific
  applicationName: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "b3LfwFV5_XqM9U2nYKWQO6oGFSngCybYx6qWkNPkKK0",

    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Category
  category: "technology",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#0e7490" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Geo targeting for Albania */}
        <meta name="geo.region" content="AL" />
        <meta name="geo.placename" content="Albania" />
        <meta name="geo.position" content="41.3275;19.8189" />
        <meta name="ICBM" content="41.3275, 19.8189" />

        {/* Language and locale */}
        <meta httpEquiv="content-language" content="sq-AL" />

        {/* Business contact info for rich snippets */}
        <meta name="contact" content="shijevere@gmail.com" />
        <meta name="reply-to" content="shijevere@gmail.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
              alternateName: "ShijeVere",
              url: "https://shijevere.com",
              logo: "https://shijevere.com/ic_header_shije_vere.png",
              description:
                "Sistemi #1 i menusë dixhitale për plazhe në Shqipëri. Porosi nga çadra me kod QR.",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Person",
                  name: "Shije Vere Team",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
                addressRegion: "Albania",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+355-68-33-03-005",
                  contactType: "customer service",
                  availableLanguage: ["Albanian", "English"],
                  areaServed: "AL",
                },
              ],
              sameAs: [
                "https://www.instagram.com/shijevere.al/",
                "https://wa.me/355683303005",
              ],
            }),
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
                description: "Provë falas",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              description:
                "Menu dixhitale për plazhe me porosi përmes kod QR dhe integrim WhatsApp",
              featureList: [
                "Menu dixhitale me kod QR",
                "Integrim WhatsApp",
                "Panel administrimi",
                "Shumë gjuhë",
                "Shumë monedha",
              ],
            }),
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://shijevere.com",
              name: "Shije Vere | Menu Dixhitale për Plazhe në Shqipëri",
              image: "https://shijevere.com/ic_header_shije_vere.png",
              telephone: "+355-68-33-03-005",
              email: "shijevere@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3275,
                longitude: 19.8189,
              },
              url: "https://shijevere.com",
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "22:00",
              },
              areaServed: {
                "@type": "Country",
                name: "Albania",
              },
            }),
          }}
        />

        {/* Structured Data - FAQPage for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Si funksionon menu dixhitale për plazhe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Klientët skanojnë kodin QR në çadër me telefonin e tyre, shfletojnë menunë dixhitale, dhe bëjnë porosinë. Stafi merr njoftimin automatikisht në WhatsApp me numrin e çadrës.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sa kushton sistemi Shije Vere?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ofrojmë provë falas për të gjithë bizneset e reja. Na kontaktoni për çmimet specifike bazuar në numrin e çadrave.",
                  },
                },
                {
                  "@type": "Question",
                  name: "A nevojitet pajisje speciale?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jo! Keni nevojë vetëm për një telefon me WhatsApp për të marrë porositë. Nuk nevojitet asnjë pajisje apo softuer special.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sa gjuhë mbështet menu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aktualisht menuja mbështet Shqip dhe Anglisht. Së shpejti do të shtojmë Italisht dhe gjuhë të tjera.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
