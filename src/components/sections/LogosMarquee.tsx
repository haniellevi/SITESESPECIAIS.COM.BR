import React from 'react'

const clients = [
  'Mineral Studio',
  'Clínica Vital',
  'Café Aurora',
  'Tech Solutions',
  'Estúdio Prime',
  'Vila Digital',
  'Nexus Corp',
  'Ponto Gourmet',
  'Aura Design',
  'Solar Labs',
]

export function LogosMarquee() {
  return (
    <section className="py-12 border-y border-border bg-[var(--bg-raised)] overflow-hidden">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-raised)] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-raised)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="text-sm font-mono font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] select-none flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-border" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
