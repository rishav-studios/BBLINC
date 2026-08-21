import localFont from "next/font/local";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";
import "@bbl/ui/globals.css";
import { cn } from "@bbl/ui/lib/utils";
import { Metadata } from "next";

const Archivo = localFont({
  src: './fonts/Archivo.ttf',
  display: 'swap',
})

// ─── SEO Metadata ────────────────────────────────────────────────────────────

const SITE_URL = "https://www.bblinc.in";
const SITE_NAME = "BBLINC";
const DEFAULT_TITLE = "BBLINC — Precision Brass & Metal Components Manufacturer";
const DEFAULT_DESCRIPTION =
  "BBLINC is a Jamnagar-based precision engineering company manufacturing high-quality brass, stainless steel, aluminium, and copper components for aerospace, automotive, HVAC, oil & gas, marine, and industrial sectors worldwide. ISO-certified. 26+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    // Core product keywords
    "brass components manufacturer",
    "precision brass parts",
    "CNC turned brass components",
    "brass fittings manufacturer India",
    "brass machined parts",
    // Material-specific
    "stainless steel components",
    "aluminium precision parts",
    "copper components manufacturer",
    "brass forgings",
    "brass bushings",
    // Industry-specific
    "brass aerospace components",
    "automotive brass parts",
    "HVAC brass fittings",
    "oil and gas brass fittings",
    "marine brass hardware",
    "brass chemical fittings",
    "agricultural brass fittings",
    "defense precision components",
    // Location + trade keywords
    "brass manufacturer Jamnagar",
    "brass exporter India",
    "precision engineering India",
    "BBLINC",
    "metal components manufacturer Gujarat",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/brandLogo.svg",
        width: 1200,
        height: 630,
        alt: "BBLINC — Precision Brass & Metal Components Manufacturer, Jamnagar, India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.webp"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },

  category: "Manufacturing",
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "BBLINC",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jamnagar",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9173355608",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      email: "info@bblinc.in",
      contactType: "customer support",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/bblinc",
    "https://wa.me/9173355608",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: "50-200" },
  knowsAbout: [
    "Precision CNC Turning",
    "Brass Components",
    "Stainless Steel Machining",
    "Aluminium Parts",
    "Copper Components",
    "Metal Forgings",
    "Industrial Fittings",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", Archivo.className)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className=" antialiased ">
        <LenisProvider>

          <Navbar />
          <main >{children}</main>
          <Footer />

        </LenisProvider>

      </body>
    </html>
  )
}
