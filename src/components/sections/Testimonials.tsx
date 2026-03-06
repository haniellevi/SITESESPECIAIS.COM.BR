import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rafael Santos',
    role: 'Fundador — Mineral Studio',
    text: 'Nosso e-commerce triplicou as vendas após o novo site. A equipe entendeu exatamente o que precisávamos e entregou muito além das expectativas.',
    rating: 5,
  },
  {
    name: 'Dra. Ana Lima',
    role: 'Diretora — Clínica Vital',
    text: 'O site transmite credibilidade e acolhimento. Os agendamentos online aumentaram 73% no primeiro mês. Recomendo sem hesitar.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'CEO — Café Aurora',
    text: 'A landing page superou todas as expectativas. Taxa de conversão de 12.4% — algo que nunca tivemos com agências anteriores.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-raised)]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            O que nossos clientes <em className="text-primary italic">dizem</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Resultados reais de empresas que confiaram no nosso trabalho.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-foreground font-sans leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-sans font-bold text-sm">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-sans">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
