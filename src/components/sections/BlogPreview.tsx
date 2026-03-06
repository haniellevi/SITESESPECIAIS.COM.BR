import React from 'react'
import { Calendar } from 'lucide-react'

const articles = [
  {
    title: 'Por que Seu Site Não Aparece no Google — e Como Resolver',
    excerpt:
      'Descubra os 7 erros técnicos que estão impedindo seu site de rankear e como corrigi-los hoje mesmo.',
    category: 'SEO',
    date: '28 Fev 2026',
    gradient: 'linear-gradient(135deg, #1a2e3e, #0f3460)',
  },
  {
    title: '5 Sinais de que Seu Site Está Espantando Clientes',
    excerpt:
      'Design desatualizado, lentidão e falta de mobile — saiba se seu site está afastando potenciais compradores.',
    category: 'Design & UX',
    date: '20 Fev 2026',
    gradient: 'linear-gradient(135deg, #2e1a3e, #4a1a6c)',
  },
  {
    title: 'Como um Bom Site Pode Dobrar Suas Vendas em 90 Dias',
    excerpt:
      'Estudo de caso real: como uma estratégia digital completa transformou os resultados de uma PME.',
    category: 'Estratégia',
    date: '12 Fev 2026',
    gradient: 'linear-gradient(135deg, #1a2e1a, #2e4a1a)',
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Conteúdo que <em className="text-primary italic">educa e converte</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Dicas, estratégias e insights para fazer seu negócio crescer no digital.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer"
              style={{ transitionDuration: 'var(--duration-base)' }}
            >
              {/* Thumbnail */}
              <div
                className="aspect-[16/9] relative flex items-center justify-center p-6"
                style={{ background: article.gradient }}
              >
                <span className="text-xs font-mono text-white/70 tracking-[0.15em] uppercase bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-sans font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-sans">
                  <Calendar size={12} />
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-sans font-medium rounded-xl hover:border-primary hover:text-primary transition-all"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            Ver mais artigos
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
