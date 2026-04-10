import React from 'react'
import Link from 'next/link'
import { Instagram, MessageCircle, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const footerSections = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'Processo', href: '#processo' },
      { label: 'Planos', href: '#planos' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Por que Ter um Site?', href: '#' },
      { label: 'SEO para Negócios', href: '#' },
      { label: 'Landing Pages', href: '#' },
      { label: 'E-Commerce', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/sitesespeciais',
    icon: Instagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5589994315927',
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-[#050505] border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-serif italic text-primary-foreground text-xl leading-none">
                  S
                </span>
              </div>
              <span className="text-foreground text-sm font-sans font-medium">
                Sites <em className="text-primary font-serif not-italic">Especiais</em>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 max-w-xs">
              Criamos sites profissionais que transformam visitantes em clientes. Design premium,
              performance otimizada e resultados reais.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--bg-raised)] text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label={social.label}
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
                      style={{ transitionDuration: 'var(--duration-fast)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5589994315927"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={14} />
                  (89) 9 9431-5927
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@sitesespeciais.com.br"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  <Mail size={14} />
                  contato@sitesespeciais.com.br
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Piauí, Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)] font-sans">
            © {currentYear} Sites Especiais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-muted-foreground transition-colors font-sans"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-muted-foreground transition-colors font-sans"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
