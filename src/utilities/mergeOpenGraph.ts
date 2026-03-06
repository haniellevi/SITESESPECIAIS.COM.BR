import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Criamos sites premium, autoritativos e de ultra-performance para negócios que buscam domínio digital em 2026. Design exclusivo, SEO avançado e experiência de luxo.',
  images: [
    {
      url: `${getServerSideURL()}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Sites Especiais - Agência de Sites Premium',
    },
  ],
  siteName: 'Sites Especiais',
  title: 'Sites Especiais — Domine o Google com Design Premium',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
