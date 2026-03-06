'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassButton } from '../ui/GlassButton'
import { Floating3DImage } from '../ui/Floating3DImage'

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden"
      id="hero"
    >
      {/* Background Orbs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Floating3DImage
          src="/images/hero_glow_orb.png"
          alt="Hero Glow"
          width={1000}
          height={1000}
          className="absolute -top-40 opacity-50 mix-blend-screen max-w-none w-[1200px]"
          priority
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[600px] h-[600px] rounded-full bg-brand-electric/20 mix-blend-screen filter blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-[500px] h-[500px] rounded-full bg-brand-cyan/20 mix-blend-screen filter blur-[100px] -translate-x-1/4 translate-y-1/4"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/20 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
          <span className="text-sm font-medium text-brand-cyan/90 tracking-wide uppercase">
            Auditoria Digital Estratégica
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] mb-6 text-white"
        >
          O seu novo site será um <br className="hidden md:block" /> cartão de visitas invisível ou
          uma <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
            máquina de vendas?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Começar com um template genérico é o atalho para perder seus melhores clientes. Pare de
          entregar autoridade para amadores com marketing melhor que o seu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <GlassButton href="#diagnostico" variant="primary" className="w-full sm:w-auto">
            Agendar Meu Diagnóstico Gratuito
          </GlassButton>
          <p className="text-sm text-white/50">
            Sessão gratuita de 30 minutos.
            <br className="hidden sm:block" /> Vagas limitadas para este mês.
          </p>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNMCAwdjQwaDRwYTZjMi4yIDAgMCAwIDAgMCAwIDAgMHYwbDguNW0tMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pointer-events-none opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_20%,transparent_80%)]" />
    </section>
  )
}
