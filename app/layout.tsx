// import type { Metadata } from 'next'
// import { Inter, Playfair_Display } from 'next/font/google'
// import './globals.css'
// import { Header } from './components/Header'
// import { WhatsAppFloat } from './components/WhatsAppFloat'
// import { Footer } from './components/Footer'


// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair',
// })

// export const metadata: Metadata = {
//   title: 'Corporate कार्यालय - India\'s Leading Compliance Platform',
//   description: 'Corporate compliance, tax, legal, GST, ITR, company registration, ROC filings, audits, and professional services.',
//   keywords: 'GST registration, company incorporation, ITR filing, ROC compliance, tax services, legal services, corporate compliance',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
//       <body>
//         <Header />
//         <main className="pt-[72px]">
//           {children}
//         </main>
//         <Footer />
//         <WhatsAppFloat />
//       </body>
//     </html>
//   )
// }

import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Footer } from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const BASE_URL = 'https://corporatekaryalay.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Corporate कार्यालय - India's Leading Compliance Platform",
    template: '%s | Corporate Karyalay',
  },
  description:
    'Corporate compliance, tax, legal, GST, ITR, company registration, ROC filings, audits, and professional services.',
  keywords:
    'GST registration, company incorporation, ITR filing, ROC compliance, tax services, legal services, corporate compliance',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Corporate Karyalay',
    title: "Corporate कार्यालय - India's Leading Compliance Platform",
    description:
      'Corporate compliance, tax, legal, GST, ITR, company registration, ROC filings, audits, and professional services.',
    url: BASE_URL,
    images: [
      {
        url: '/og-image.jpg', // add a 1200x630 image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Corporate Karyalay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Corporate कार्यालय - India's Leading Compliance Platform",
    description:
      'Corporate compliance, tax, legal, GST, ITR, company registration, ROC filings, audits, and professional services.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a', // match your primary-900 color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}