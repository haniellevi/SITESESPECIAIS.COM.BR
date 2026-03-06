import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { SiteFooter } from '@/components/site/SiteFooter'
import { Navbar } from '@/components/layout/Navbar'
import { CustomCursor } from '@/components/ui/CustomCursor'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

// Instrument Serif from Google Fonts — only regular + italic
// Using next/font/google doesn't support italic-only well, so we use local
const instrumentSerif = localFont({
  src: [
    {
      path: '../../../public/fonts/InstrumentSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/InstrumentSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(dmSans.variable, jetbrainsMono.variable, instrumentSerif.variable)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Sites Especiais',
              url: 'https://sitesespeciais.com.br',
              logo: 'https://sitesespeciais.com.br/favicon.png',
              description:
                'Agência de Sites Premium e Ultra Performance. Especialistas em SEO e alta conversão. Atendimento 100% digital e nacional.',
              areaServed: {
                '@type': 'Country',
                name: 'Brazil',
              },
              priceRange: '$$$',
            }),
          }}
        />
        <link href="/favicon.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <CustomCursor />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <div className="grain-overlay" aria-hidden="true" />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'Sites Especiais — Agência de Sites Premium & Ultra Performance',
    template: '%s | Sites Especiais',
  },
  description:
    'Criamos a presença digital de elite que sua empresa merece. Design premium, velocidade extrema (Core Web Vitals) e foco total em conversão e autoridade no Google.',
  keywords: [
    'criação de sites premium',
    'agência web design luxury',
    'desenvolvimento de landing pages profissionais',
    'SEO 2026',
    'performance web especializada',
    'branding digital autoritativo',
  ],
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@sitesespeciais',
    images: [`${getServerSideURL()}/og-image.png`],
  },
}
