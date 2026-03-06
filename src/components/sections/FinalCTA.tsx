'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassButton } from '../ui/GlassButton'

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark" id="cta">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-electric/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-cyan/20 rounded-full blur-[200px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl pt-12 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Pronto para transformar seu <br className="hidden md:block" /> site em uma máquina?
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Deixe os templates genéricos para os amadores. Agende agora o seu diagnóstico gratuito e
            descubra o que um Site Especial pode fazer pelo seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <GlassButton
              href="#diagnostico"
              variant="primary"
              className="w-full sm:w-auto text-xl px-12 py-6"
            >
              AGENDAR MEU DIAGNÓSTICO AGORA
            </GlassButton>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-white/40">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-cyan"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Seus dados estão 100% seguros conosco.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
