import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vrjelectrics.com.au'),
  title: {
    default: 'Premium Electrical & Solar Solutions Victoria | VRJ Electrics',
    template: '%s | VRJ Electrics'
  },
  description: "Premium electrical and solar installation services in Victoria. We provide high-quality solar panels, batteries, and electrical solutions for homes and businesses. Get your FREE quote today.",
  keywords: [
    'VRJ Electrics',
    'electrical services Victoria',
    'solar panels Victoria',
    'solar battery installation Victoria',
    'residential solar Victoria',
    'commercial solar Victoria',
    'clean energy Victoria',
    'heat pump installation',
    'aircon service',
    'solar rebates Australia',
    'clean energy',
    'renewable energy Australia',
    'Sydney solar installation',
    'Melbourne solar panels',
    'Brisbane solar power',
    'Perth solar systems',
  ],
  authors: [{ name: 'VRJ Electrics' }],
  creator: 'VRJ Electrics',
  publisher: 'VRJ Electrics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://vrjelectrics.com.au',
    siteName: 'VRJ Electrics',
    title: 'Premium Electrical & Solar Solutions Victoria | VRJ Electrics',
    description: "Victoria's leading premium electrical and solar installation company. Expert residential & commercial solar power, battery storage & more. Get your FREE quote today!",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VRJ Electrics - Premium Electrical & Solar Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Electrical & Solar Solutions Victoria',
    description: "Victoria's leading premium electrical and solar installation company. Get your FREE quote today!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vrjelectrics.com.au',
  },
  verification: {
    google: 'LFCS7YnQJoWj3c9-2ASI4nv3zk6-jV9jHiYe1UdFqDo',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E6' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1814' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3XHBWPGEKS"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3XHBWPGEKS');
            `,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5T8KKSTH');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VRJ Electrics",
              "description": "Victoria's leading premium electrical and solar installation company",
              "url": "https://vrjelectrics.com.au",
              "telephone": "0479074555",
              "email": "info@vrjelectrics.com.au",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "86 Hotham St",
                "addressLocality": "Preston",
                "addressRegion": "VIC",
                "postalCode": "3072",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-37.8136",
                "longitude": "144.9631"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "image": "https://vrjelectrics.com.au/og-image.jpg",
              "sameAs": [
                "https://facebook.com/vrjelectrics",
                "https://instagram.com/vrjelectrics",
                "https://linkedin.com/company/vrjelectrics"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Victoria"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Solar Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Solar Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Solar Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solar Battery Storage"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T8KKSTH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
