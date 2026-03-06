'use client'

import React from 'react'
import { Check } from 'lucide-react'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Essencial',
    price: 'R$ 4.900',
    description: 'Ideal para quem está começando e precisa de presença online profissional.',
    features: [
      'Até 5 páginas',
      'Design responsivo',
      'Otimização SEO básica',
      'Formulário de contato',
      'Certificado SSL',
      'Entrega em 15 dias',
    ],
    cta: 'Começar Agora',
  },
  {
    name: 'Profissional',
    price: 'R$ 9.900',
    description: 'Para empresas que querem se destacar com funcionalidades avançadas.',
    features: [
      'Até 12 páginas',
      'Design premium exclusivo',
      'SEO avançado + Analytics',
      'Blog integrado',
      'Painel CMS completo',
      'WhatsApp integrado',
      'Entrega em 25 dias',
      '3 meses de suporte',
    ],
    featured: true,
    cta: 'Escolher Profissional',
  },
  {
    name: 'Premium',
    price: 'R$ 19.900',
    description: 'Solução completa para negócios que exigem o máximo em performance e design.',
    features: [
      'Páginas ilimitadas',
      'Design ultra-premium',
      'SEO técnico completo',
      'E-commerce integrado',
      'Blog + CMS completo',
      'Integrações customizadas',
      'Performance otimizada',
      'Entrega em 40 dias',
      '6 meses de suporte',
    ],
    cta: 'Falar com Consultor',
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-20 md:py-28 bg-[var(--bg-raised)]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Planos & Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Invista no <em className="text-primary italic">crescimento</em> do seu negócio
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Planos transparentes, sem surpresas. Escolha o ideal para sua empresa.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 flex flex-col ${
                plan.featured
                  ? 'border-2 border-primary shadow-lg shadow-primary/10 md:-mt-4 md:mb-0'
                  : 'border border-border'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 bg-primary text-primary-foreground text-xs font-sans font-bold rounded-full uppercase tracking-wider">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="text-lg font-sans font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground font-sans mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-sans font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground font-sans">/projeto</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-sans text-foreground"
                  >
                    <Check size={16} className="text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contato"
                className={`block text-center px-6 py-3.5 rounded-xl font-sans font-semibold text-sm transition-all ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-[var(--accent-hover)]'
                    : 'border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
