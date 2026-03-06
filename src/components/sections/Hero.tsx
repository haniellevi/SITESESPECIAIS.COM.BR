'use client'

import React, { useEffect, useRef, useState } from 'react'

function AnimatedCounter({
  target,
  suffix = '',
  label,
}: {
  target: number
  suffix?: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-sans font-bold text-primary tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground font-sans mt-1">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center pt-20 md:pt-0 overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232, 197, 71, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-[var(--bg-raised)] text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Agência de Sites Premium
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight mb-6"
            style={{ animationDelay: '100ms' }}
          >
            Criamos sites que <em className="text-primary italic">transformam</em>
            <br />
            visitantes em clientes
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ animationDelay: '200ms' }}
          >
            Design premium, performance otimizada e estratégias de conversão para empresas que
            querem se destacar no digital.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all group text-base"
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              Solicitar Orçamento
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-sans font-medium rounded-xl hover:border-primary hover:text-primary transition-all text-base"
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              Ver Portfólio
            </a>
          </div>

          {/* Counters */}
          <div
            className="animate-fade-up mt-16 md:mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
            style={{ animationDelay: '500ms' }}
          >
            <AnimatedCounter target={150} suffix="+" label="Projetos" />
            <AnimatedCounter target={98} suffix="%" label="Satisfação" />
            <AnimatedCounter target={8} suffix="+" label="Anos" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
