'use client'

import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'

type PortfolioItem = {
  id: number
  title: string
  category: string
  tag: string
  result: string
  gradient: string
  testimonial: { name: string; role: string; text: string }
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Mineral Studio',
    category: 'E-Commerce',
    tag: 'e-commerce',
    result: 'Aumento de 185% nas vendas online',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    testimonial: {
      name: 'Rafael Santos',
      role: 'Fundador',
      text: 'Nosso e-commerce triplicou as vendas.',
    },
  },
  {
    id: 2,
    title: 'Clínica Vital',
    category: 'Institucional',
    tag: 'institucional',
    result: '73% mais agendamentos online',
    gradient: 'linear-gradient(135deg, #1a2e2e, #1a3e4a, #1a4a6c)',
    testimonial: {
      name: 'Dra. Ana Lima',
      role: 'Diretora',
      text: 'Transmite credibilidade e acolhimento.',
    },
  },
  {
    id: 3,
    title: 'Café Aurora',
    category: 'Landing Page',
    tag: 'landing-page',
    result: 'Taxa de conversão de 12.4%',
    gradient: 'linear-gradient(135deg, #1a2e1a, #2e4a1a, #3e6c1a)',
    testimonial: {
      name: 'Mariana Costa',
      role: 'CEO',
      text: 'Superou todas as expectativas.',
    },
  },
]

const filters = ['Todos', 'E-Commerce', 'Institucional', 'Landing Page']

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered =
    activeFilter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[var(--bg-raised)]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Projetos que <em className="text-primary italic">geram resultados</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Cada site é uma máquina de conversão feita sob medida para o nosso cliente.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-sans font-medium rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground'
              }`}
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all cursor-pointer"
              style={{ transitionDuration: 'var(--duration-base)' }}
            >
              {/* Thumbnail area */}
              <div
                className="aspect-[4/3] relative flex items-center justify-center"
                style={{ background: item.gradient }}
              >
                <span className="text-white/80 font-serif text-3xl italic">{item.title}</span>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 p-6"
                  style={{ transitionDuration: 'var(--duration-base)' }}
                >
                  <ExternalLink size={24} className="text-primary" />
                  <p className="text-white text-sm font-sans text-center">
                    &ldquo;{item.testimonial.text}&rdquo;
                  </p>
                  <span className="text-primary text-xs font-mono">
                    — {item.testimonial.name}, {item.testimonial.role}
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 bg-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-primary tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-sans font-medium rounded-xl hover:border-primary hover:text-primary transition-all"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            Ver todos os projetos
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
