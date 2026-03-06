import React from 'react'
import { Gauge, Search, Smartphone, ShieldCheck, Settings, Headphones } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Performance Extrema',
    description:
      'Sites que carregam em menos de 2 segundos. Cada milissegundo conta para suas conversões.',
  },
  {
    icon: Search,
    title: 'SEO Otimizado',
    description: 'Estrutura técnica perfeita para rankear no Google desde o primeiro dia.',
  },
  {
    icon: Smartphone,
    title: '100% Responsivo',
    description:
      'Design adaptado para qualquer tela — mobile, tablet e desktop com a mesma qualidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança SSL',
    description: 'Certificado SSL, backups automáticos e proteção contra ameaças inclusos.',
  },
  {
    icon: Settings,
    title: 'CMS Intuitivo',
    description: 'Painel de administração simples para você atualizar conteúdo sem ajuda técnica.',
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    description: 'Atendimento humanizado via WhatsApp. Estamos sempre prontos para ajudar.',
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Tudo que seu site <em className="text-primary italic">precisa ter</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Não entregamos apenas um site bonito — entregamos uma ferramenta de vendas completa.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
              style={{ transitionDuration: 'var(--duration-base)' }}
            >
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                style={{ transitionDuration: 'var(--duration-base)' }}
              >
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
