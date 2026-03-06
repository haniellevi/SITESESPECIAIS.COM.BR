'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const SocialProofBar = () => {
  const logos = [
    'Construtora Jatobá',
    'Tech Solutions',
    'Premium Clinic',
    'Advocacia Silva',
    'Agência de Lançamentos Alpha',
    'Grupo B2B Lux',
    'Construtora Jatobá',
    'Tech Solutions',
    'Premium Clinic',
    'Advocacia Silva',
    'Agência de Lançamentos Alpha',
    'Grupo B2B Lux',
  ]

  return (
    <section className="py-12 border-y border-white/5 bg-brand-dark overflow-hidden relative">
      {/* Sombras laterais para dar o efeito de profundidade no carrossel infinito */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold tracking-wider text-white/40 uppercase">
          Empresas que confiam em nossa arquitetura digital
        </p>
      </div>

      <div className="flex w-[200%]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center opacity-50 hover:opacity-100 hover:text-brand-cyan transition-all duration-300 cursor-default"
            >
              {/* O ideal aqui é ter um componente Image, mas como são placeholders, usaremos texto estilizado */}
              <span className="text-xl md:text-2xl font-bold font-serif italic text-white/50 hover:text-brand-cyan hover:drop-shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all duration-300">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
