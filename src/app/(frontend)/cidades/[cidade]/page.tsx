import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { getServerSideURL } from '@/utilities/getURL'

// Components
import { ContactModal } from '@/components/contact-modal'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { FAQSection } from '@/components/faq'
import { PrimaryButton, SecondaryButton, Tag, NavButton } from '@/components/luxota-ui'
import {
  ArrowRight,
  Search,
  Target,
  ShieldAlert,
  TrendingDown,
  Layout,
  Zap,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'

// Types
type Cidade = {
  slug: string
  name: string
  state: string
  region: string
}

// Helpers
function getCidades(): Cidade[] {
  const filePath = path.join(process.cwd(), 'src/data/cidades.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function generateStaticParams() {
  const cidades = getCidades()
  return cidades.map((cidade) => ({
    cidade: cidade.slug,
  }))
}

export async function generateMetadata(
  // Note: we can use params as an async promise in next 15 if needed, here typing accordingly.
  { params }: { params: Promise<{ cidade: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { cidade: slug } = await params
  const cidades = getCidades()
  const cidadeData = cidades.find((c) => c.slug === slug)

  if (!cidadeData) {
    return {
      title: 'Página Não Encontrada',
    }
  }

  const title = `Agência de Criação de Sites Premium em ${cidadeData.name} - ${cidadeData.state}`
  const description = `Especialistas em desenvolvimento de sites otimizados e de alta performance para empresas em ${cidadeData.name}. Conquiste clientes no Google com um design premium.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${getServerSideURL()}/cidades/${slug}`,
      siteName: 'Sites Especiais',
      locale: 'pt_BR',
      type: 'website',
    },
    alternates: {
      canonical: `${getServerSideURL()}/cidades/${slug}`,
    },
  }
}

export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade: slug } = await params
  const cidades = getCidades()
  const cidadeData = cidades.find((c) => c.slug === slug)

  if (!cidadeData) {
    notFound()
  }

  const { name: cityName, state } = cidadeData

  return (
    <main className="relative z-10 bg-luxota-bg min-h-screen selection:bg-luxota-accent/30 selection:text-luxota-accent antialiased">
      {/* Schema específico para Serviço Local Online  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Web Design',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Sites Especiais',
              url: 'https://sitesespeciais.com.br',
            },
            areaServed: {
              '@type': 'City',
              name: cityName,
              containedInPlace: {
                '@type': 'State',
                name: state,
              },
            },
            description: `Criação de sites de alta conversão e design premium atendendo empresas em ${cityName}.`,
          }),
        }}
      />

      <div className="ambient-light">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="noise"></div>

      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-3 flex items-center gap-1 md:gap-4 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
          <picture>
            <source srcSet="/logos/logo-dark.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/logos/logo-light.png"
              alt="SitesEspeciais"
              className="h-10 md:h-12 w-auto mr-4"
            />
          </picture>

          <div className="hidden lg:flex items-center gap-2 mr-2 border-l border-white/10 pl-6">
            <NavButton variant="ghost" href="/#problema">
              O Problema
            </NavButton>
            <NavButton variant="ghost" href="/#portfolio">
              Projetos
            </NavButton>
            <NavButton variant="ghost" href="/#contato">
              Contato
            </NavButton>
          </div>
          {/* Note: In a Server Component, interactivity for ContactModal usually requires a Client Component wrapper.
              For simplicity, we'll route to the main contact anchor or pass down to a client modal trigger */}
          <NavButton href="/#contato">Agendar conversa</NavButton>
        </div>
      </nav>

      {/* HERO Adaptado para a Cidade */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="perspective-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxota-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-7xl px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-10 animate-float inline-block">
            <Tag>
              Exclusivo para {cityName} - {state}
            </Tag>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-medium tracking-tightest text-white leading-[0.9] mb-10">
            <div className="overflow-hidden py-2">
              <span className="block drop-shadow-2xl">
                Seu site em <span className="text-gradient-premium">{cityName}</span>
              </span>
            </div>
            <div className="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
              <span className="block text-white/30 italic font-serif tracking-tight px-2">
                vendendo para você
              </span>
            </div>
            <div className="overflow-hidden py-2">
              <span className="block text-gradient-premium">no piloto automático.</span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-luxota-dim max-w-2xl mx-auto leading-relaxed mb-14 font-light">
            Não seja mais um em {cityName}. Mostre que seu negócio é autoridade máxima no seu setor
            com um site de luxo otimizado para os primeiros resultados do Google.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <PrimaryButton href="/#contato">
              Agendar Diagnóstico Gratuito{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </PrimaryButton>
            <SecondaryButton href="/#portfolio">Ver projetos</SecondaryButton>
          </div>
        </div>
      </section>

      {/* COPY DE VENDAS */}
      <section className="ds-section">
        <div className="ds-container">
          <span className="ds-title">Estratégia Local</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-4xl">
            Como vamos dominar {cityName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="spotlight-card rounded-[2rem] p-10 flex flex-col group cursor-default bg-luxota-card h-full">
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md">
                  <Target className="text-3xl text-luxota-accent" />
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">SEO Geofocado</h3>
                <p className="text-base text-luxota-dim">
                  Mapeamos o comportamento do cliente em {cityName} e estruturamos suas páginas para
                  capturar nas buscas orgânicas exatamente o que estão procurando hoje.
                </p>
              </div>
            </div>

            <div className="spotlight-card rounded-[2rem] p-10 flex flex-col group cursor-default bg-luxota-card h-full">
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md">
                  <Zap className="text-3xl text-luxota-accent" />
                </div>
                <h3 className="text-2xl text-white font-medium mb-3">Performance Extrema</h3>
                <p className="text-base text-luxota-dim">
                  A velocidade com que seu site abre dita sua posição no Google. Nossas soluções
                  cortam atrasos dando uma experiência perfeita no mobile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Secundário */}
      <section className="py-24 border-y border-white/5 bg-luxota-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-luxota-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="ds-container relative z-10 text-center">
          <div className="mb-8 relative inline-block">
            <ShieldCheck className="w-16 h-16 text-luxota-accent mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-luxota-accent/20 blur-2xl -z-10 rounded-full scale-150"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Pronto para ser o #1 em {cityName}?
          </h2>
          <p className="text-xl text-luxota-dim max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Nós cuidamos da tecnologia. Você cuida das vendas. Atendimento 100% digital em todo o{' '}
            {state}.
          </p>
          <PrimaryButton href="/#contato">Falar com a equipe</PrimaryButton>
        </div>
      </section>
    </main>
  )
}
