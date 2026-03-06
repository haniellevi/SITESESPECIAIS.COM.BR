'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Search,
  Target,
  ShieldAlert,
  TrendingDown,
  CheckCircle2,
  Layout,
  Zap,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import { PrimaryButton, SecondaryButton, NavButton, Tag } from '@/components/luxota-ui'
import { FAQSection } from '@/components/faq'
import { ContactModal } from '@/components/contact-modal'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  }

  return (
    <main className="relative z-10 bg-luxota-bg min-h-screen selection:bg-luxota-accent/30 selection:text-luxota-accent antialiased">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* BACKGROUND ELEMENTS */}
      <div className="ambient-light">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="noise"></div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
          className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-3 flex items-center gap-1 md:gap-4 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <picture>
            <source srcSet="/logos/logo-dark.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/logos/logo-light.png"
              alt="SitesEspeciais"
              className="h-10 md:h-12 w-auto mr-4"
            />
          </picture>

          <div className="hidden lg:flex items-center gap-2 mr-2 border-l border-white/10 pl-6">
            <NavButton variant="ghost" href="#problema">
              O Problema
            </NavButton>
            <NavButton variant="ghost" href="#portfolio">
              Projetos
            </NavButton>
            <NavButton variant="ghost" href="#contato">
              Contato
            </NavButton>
          </div>

          <NavButton onClick={() => setIsModalOpen(true)}>Agendar conversa</NavButton>
        </motion.div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="perspective-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxota-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

        <motion.div
          initial="initial"
          animate="whileInView"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-7xl px-6"
        >
          <motion.div variants={fadeIn} className="mb-10 animate-float inline-block">
            <Tag>Sites Premium Para Negócios Locais</Tag>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tightest text-white leading-[0.9] mb-10">
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="block drop-shadow-2xl"
              >
                Seu concorrente
              </motion.span>
            </div>
            <div className="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                className="block text-white/30 italic font-serif tracking-tight pr-4"
              >
                aparece no Google.
              </motion.span>
            </div>
            <div className="overflow-hidden py-2">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="block text-gradient-premium"
              >
                Você, não.
              </motion.span>
            </div>
          </h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-luxota-dim max-w-2xl mx-auto leading-relaxed mb-14 font-light"
          >
            Clientes pesquisam agora mesmo pelo que você vende. Quem tem site profissional, fecha.
            Quem não tem, nem sabe o que perdeu.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <PrimaryButton onClick={() => setIsModalOpen(true)}>
              Agendar Diagnóstico Gratuito{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </PrimaryButton>
            <SecondaryButton href="#portfolio">Ver projetos</SecondaryButton>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-16 flex items-center justify-center gap-3 text-sm text-luxota-dim font-mono uppercase tracking-widest"
          >
            <span>50+ sites entregues</span>
            <span className="w-1 h-1 bg-luxota-accent rounded-full"></span>
            <span>98% satisfação</span>
            <span className="w-1 h-1 bg-luxota-accent rounded-full"></span>
            <span>7+ anos de mercado</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="ds-section" id="problema">
        <div className="ds-container">
          <motion.span
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="ds-title"
          >
            Por que você está perdendo clientes
          </motion.span>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {[
              {
                icon: Search,
                title: 'Invisível no Google',
                desc: '97% das pessoas pesquisam online antes de contratar. Se você não aparece, para elas você não existe.',
              },
              {
                icon: Target,
                title: 'Anúncios sem destino',
                desc: 'Seu anúncio leva para o Instagram. O cliente não encontra profissionalismo, fecha a aba. Cada clique perdido é dinheiro jogado fora.',
              },
              {
                icon: ShieldAlert,
                title: 'Credibilidade amadora',
                desc: 'A primeira impressão hoje é digital. Sem site, até quem indica você gera dúvida no cliente que vai conferir online.',
              },
              {
                icon: TrendingDown,
                title: 'Refém do algoritmo',
                desc: 'Redes sociais são terreno alugado. O alcance caiu 80%? Problema seu. Site próprio é endereço que ninguém tira.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="spotlight-card rounded-[2rem] p-10 flex flex-col group cursor-default bg-luxota-card h-full"
              >
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md">
                    <card.icon className="text-3xl text-luxota-accent" />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-3">{card.title}</h3>
                  <p className="text-base text-luxota-dim">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-white font-medium italic">
              E o custo disso é maior do que você imagina.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="ds-section bg-luxota-card relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/10 via-transparent to-transparent"></div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="ds-container relative z-10 text-center"
        >
          <motion.div
            variants={fadeIn}
            className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-white/[0.08] font-sans mb-4 select-none drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          >
            63%
          </motion.div>
          <motion.p
            variants={fadeIn}
            className="text-3xl md:text-5xl text-white font-medium tracking-tight mb-8 -mt-24 md:-mt-40 relative z-10 drop-shadow-lg"
          >
            dos consumidores descartam empresas sem site profissional.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-luxota-dim max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            Cada semana sem presença digital não é neutra. É uma semana pagando o concorrente com
            seus próprios clientes.
          </motion.p>
          <motion.p variants={fadeIn} className="text-xl text-luxota-accent font-medium italic">
            Mas dá pra virar esse jogo rápido.
          </motion.p>
        </motion.div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <motion.span
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="ds-title"
          >
            A virada
          </motion.span>
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-4xl"
          >
            Da invisibilidade à autoridade digital — em semanas.
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="border border-white/10 rounded-[2rem] bg-[#050507] overflow-hidden mb-12 shadow-2xl relative z-10"
          >
            <div className="divide-y divide-white/5">
              {[
                ['Depende só de indicação', 'Clientes chegam pelo Google todo dia'],
                ['Perde quem pesquisa online', 'Aparece para quem está pronto para comprar'],
                ['Anúncios sem destino', 'Tráfego convertendo em site profissional'],
                ['Parece menor que o concorrente', 'Compete de igual com empresas maiores'],
                ['Imagem amadora', 'Presença premium que reflete sua qualidade real'],
              ].map(([antes, depois], i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 hover:bg-white/[0.01] transition-colors group/row"
                >
                  <div className="w-full md:w-5/12 text-luxota-dim/60 text-lg flex items-center gap-3 transition-colors group-hover/row:text-luxota-dim/80">
                    <span className="text-red-400/50 font-mono">✕</span> {antes}
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <ArrowRight className="text-white/20 group-hover/row:text-luxota-accent transition-colors" />
                  </div>
                  <div className="w-full md:w-5/12 text-white text-lg font-medium flex items-center gap-3">
                    <span className="text-luxota-accent font-mono">✦</span> {depois}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-white font-medium italic">
              Veja exatamente o que entregamos para isso acontecer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="ds-section bg-luxota-bg relative overflow-hidden">
        <div className="ds-container">
          <motion.span
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="ds-title"
          >
            O que você recebe
          </motion.span>
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-3xl"
          >
            Não é um site. É uma máquina de credibilidade que trabalha 24h por você.
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Layout,
                title: 'Design Exclusivo',
                desc: 'Layout 100% original para seu negócio. Responsivo. Identidade que gera confiança no primeiro segundo.',
              },
              {
                icon: Zap,
                title: 'Otimizado para Google',
                desc: 'SEO técnico, velocidade profissional e Google Meu Negócio configurado. Feito para você ser encontrado.',
              },
              {
                icon: MessageSquare,
                title: 'Copy que Converte',
                desc: 'Cada palavra escrita com técnica de persuasão. CTAs estratégicos. Integração direta com WhatsApp.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="spotlight-card rounded-[2rem] p-10 flex flex-col group cursor-default bg-[#08080A] h-full shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md transition-colors group-hover:border-luxota-accent/30">
                    <feature.icon className="text-3xl text-luxota-accent" />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-3">{feature.title}</h3>
                  <p className="text-base text-luxota-dim">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto border border-white/10 rounded-[2rem] bg-[#050507] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-luxota-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-2xl font-medium text-white mb-8 relative z-10">
              O que está incluído:
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
            >
              {[
                'Site premium com design exclusivo (5-10 páginas)',
                'Copywriting profissional em todas as páginas',
                'SEO técnico + Google Meu Negócio',
                'Responsivo: mobile, tablet, desktop',
                'Integração WhatsApp + redes sociais',
                'Hospedagem + SSL (cadeado de segurança)',
                'Painel para você editar textos e imagens',
                '90 dias de suporte após entrega',
              ].map((item, i) => (
                <motion.li key={i} variants={fadeIn} className="flex items-start gap-3">
                  <span className="text-luxota-accent font-mono mt-1">✦</span>
                  <span className="text-lg text-luxota-dim">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-white font-medium italic">
              Veja quem já passou por esse processo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="ds-section bg-luxota-card" id="portfolio">
        <div className="ds-container">
          <motion.span
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="ds-title"
          >
            Projetos reais
          </motion.span>
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-16"
          >
            Empresas que saíram da invisibilidade.
          </motion.h2>

          <PortfolioGallery />
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <motion.span
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="ds-title"
          >
            Como funciona
          </motion.span>
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-3xl"
          >
            4 passos. Você foca no seu negócio, a gente cuida do resto.
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <motion.div
              variants={fadeIn}
              className="md:col-span-4 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-center p-8 hover:bg-white/[0.08] transition-colors group"
            >
              <span className="text-luxota-accent font-mono text-4xl mb-4 group-hover:scale-110 transition-transform inline-block origin-left">
                01
              </span>
              <h3 className="text-xl text-white font-medium mb-2">Diagnóstico gratuito.</h3>
              <p className="text-luxota-dim text-sm">
                Call de 30 min para entender seu negócio. Zero compromisso.
              </p>
            </motion.div>

            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeIn}
                className="rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-center p-8 hover:bg-white/[0.08] transition-colors group"
              >
                <span className="text-luxota-accent font-mono text-4xl mb-4 group-hover:scale-110 transition-transform inline-block origin-left">
                  02
                </span>
                <h3 className="text-xl text-white font-medium mb-2">Proposta clara.</h3>
                <p className="text-luxota-dim text-sm">
                  Escopo, prazo e investimento. Sem surpresas.
                </p>
              </motion.div>

              <div className="flex flex-col gap-6">
                <motion.div
                  variants={fadeIn}
                  className="rounded-2xl border border-white/10 bg-white/5 flex-1 flex flex-col justify-center p-8 hover:bg-white/[0.08] transition-colors group"
                >
                  <span className="text-luxota-accent font-mono text-2xl mb-2 group-hover:scale-110 transition-transform inline-block origin-left">
                    03
                  </span>
                  <h3 className="text-lg text-white font-medium mb-1">Criação completa.</h3>
                  <p className="text-luxota-dim text-xs">
                    Design, textos e desenvolvimento. Você valida cada etapa.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="rounded-2xl border border-white/10 bg-white/5 flex-1 flex flex-col justify-center p-8 hover:bg-white/[0.08] transition-colors group"
                >
                  <span className="text-luxota-accent font-mono text-2xl mb-2 group-hover:scale-110 transition-transform inline-block origin-left">
                    04
                  </span>
                  <h3 className="text-lg text-white font-medium mb-1">Publicação + suporte.</h3>
                  <p className="text-luxota-dim text-xs">
                    Site no ar, otimizado, com 90 dias de acompanhamento.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-luxota-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-luxota-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeIn}
          className="ds-container relative z-10 text-center"
        >
          <div className="mb-8 relative inline-block">
            <ShieldCheck className="w-16 h-16 text-luxota-accent mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-luxota-accent/20 blur-2xl -z-10 rounded-full scale-150"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Satisfação garantida ou refazemos.
          </h2>
          <p className="text-xl text-luxota-dim max-w-2xl mx-auto leading-relaxed font-light">
            Se o site não representar a qualidade do seu negócio, a gente refaz. Sem custo. Sem
            burocracia.
          </p>
        </motion.div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="ds-title">Dúvidas Frequentes</span>
            <h2 className="text-4xl font-medium text-white">O que você precisa saber</h2>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <FAQSection />
          </motion.div>
        </div>
      </section>

      <section className="ds-section relative overflow-hidden" id="contato">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxota-accent/10"></div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="ds-container relative z-10 text-center"
        >
          <motion.span variants={fadeIn} className="ds-title">
            Próximo passo
          </motion.span>
          <motion.h2
            variants={fadeIn}
            className="text-5xl md:text-7xl font-medium tracking-tightest text-white leading-[0.9] mb-8 max-w-4xl mx-auto"
          >
            Seu negócio merece ser encontrado, respeitado e escolhido.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-luxota-dim max-w-2xl mx-auto mb-4">
            30 minutos. Sem compromisso. Sem pressão.
          </motion.p>
          <motion.p variants={fadeIn} className="text-xl text-white font-medium mb-12">
            Vamos mostrar o que você está deixando na mesa.
          </motion.p>

          <motion.div variants={fadeIn}>
            <PrimaryButton className="mb-6" onClick={() => setIsModalOpen(true)}>
              Quero Meu Diagnóstico Gratuito{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </PrimaryButton>
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-sm text-luxota-dim font-mono uppercase tracking-widest"
          >
            Vagas limitadas por mês. Resposta em até 24h.
          </motion.p>
        </motion.div>
      </section>
    </main>
  )
}
