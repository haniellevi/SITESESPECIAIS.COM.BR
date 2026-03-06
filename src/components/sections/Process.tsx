'use client'

import React from 'react'
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description:
      'Entendemos seu negócio, público-alvo e objetivos para criar a estratégia perfeita.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Criamos layouts premium com foco em conversão, usabilidade e identidade visual.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Código limpo, performance extrema e SEO otimizado para máxima visibilidade.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Lançamento',
    description: 'Deploy profissional, treinamento e suporte contínuo para seu crescimento.',
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Um processo <em className="text-primary italic">simples e eficiente</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Do primeiro contato ao site no ar em semanas, não meses.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all overflow-hidden"
              style={{ transitionDuration: 'var(--duration-base)' }}
            >
              {/* Progress bar on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
                style={{ transitionDuration: 'var(--duration-slow)' }}
              />

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-mono font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                  {step.number}
                </span>
                <div
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  style={{ transitionDuration: 'var(--duration-base)' }}
                >
                  <step.icon size={20} />
                </div>
              </div>

              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
