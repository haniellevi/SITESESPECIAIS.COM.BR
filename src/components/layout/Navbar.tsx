'use client'

import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { GlassButton } from '../ui/GlassButton'

export const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-brand-dark/70 backdrop-blur-premium border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo or Brand Name */}
          <div className="font-mono text-xl font-bold tracking-tighter text-white">
            SITES<span className="text-brand-cyan">ESPECIAIS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {['Serviços', 'Metodologia', 'Resultados', 'FAQ'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-brand-cyan transition-all group-hover:w-full group-hover:left-0 duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <GlassButton href="#diagnostico" className="px-6 py-2 text-sm">
            Auditoria Cortesia
          </GlassButton>
        </div>

        {/* Mobile Toggle (Placeholder for now) */}
        <div className="md:hidden flex items-center">
          <button className="text-white p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
