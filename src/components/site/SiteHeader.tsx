'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/providers/Theme'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#processo', label: 'Processo' },
  { href: '#planos', label: 'Planos' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
      style={{
        transitionDuration: 'var(--duration-base)',
        transitionTimingFunction: 'var(--ease-out)',
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Sites Especiais — Home"
        >
          <div
            className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            <span className="font-serif italic text-primary-foreground text-xl leading-none font-normal">
              S
            </span>
          </div>
          <span className="text-foreground text-sm font-sans font-medium tracking-tight hidden sm:inline">
            Sites <em className="text-primary font-serif not-italic">Especiais</em>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
              style={{ transitionDuration: 'var(--duration-fast)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Alternar tema"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Desktop */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all group"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            Solicitar Orçamento
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all ${
          isMobileMenuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        }`}
        style={{
          transitionDuration: 'var(--duration-base)',
          transitionTimingFunction: 'var(--ease-out)',
          backgroundColor: 'var(--background)',
        }}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-3 text-base font-sans font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-base font-sans font-semibold rounded-lg text-center hover:bg-[var(--accent-hover)] transition-colors"
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
