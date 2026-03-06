import React from 'react'
import Link from 'next/link'

const navigationLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Blog', href: '#blog' },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-24 px-6 bg-[#020203] overflow-hidden mt-20">
      {/* Visual background text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none flex justify-center opacity-[0.03]">
        <h1 className="text-[15vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap">
          SITES ESPECIAIS
        </h1>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto items-start">
          {/* Brand - Positioned at 25% (left column) */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="inline-block mb-6">
              <picture>
                <source srcSet="/logos/logo-dark.png" media="(prefers-color-scheme: dark)" />
                <img
                  src="/logos/logo-light.png"
                  alt="SitesEspeciais"
                  className="h-10 md:h-12 w-auto"
                />
              </picture>
            </Link>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-[320px]">
              Criamos sites profissionais que transformam visitantes em clientes. Design premium,
              performance otimizada e resultados reais.
            </p>
          </div>

          {/* Nav Section - Positioned at 75% (right column) */}
          <div className="flex flex-col items-center text-center md:pt-4">
            <h4 className="font-sans font-semibold text-sm text-foreground mb-6 tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="flex items-center justify-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#2d79ff] transition-colors font-sans"
                    style={{ transitionDuration: 'var(--duration-fast)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - Centered horizontally */}
        <div className="mt-20 pt-8 w-full flex items-center justify-center text-center">
          <p className="text-sm text-[var(--text-muted)] font-sans">
            © {currentYear} Sites Especiais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
