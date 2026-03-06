'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassButton } from '../ui/GlassButton'
import { Floating3DImage } from '../ui/Floating3DImage'

export const TheOffer = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="diagnostico">
      {/* Glow Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-brand-electric/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[2rem] backdrop-blur-md relative"
        >
          <Floating3DImage
            src="/images/diagnostic_visual_3d.png"
            alt="Diagnóstico Digital 3D"
            width={350}
            height={350}
            className="absolute -top-32 -right-10 opacity-60 mix-blend-screen pointer-events-none hidden lg:block"
            animationDelay={0.5}
          />
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-electric/30 bg-brand-electric/10 text-brand-cyan font-semibold text-sm mb-6 relative z-10">
            Convite Limitado
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            O Diagnóstico de Engenharia <br className="hidden md:block" /> Digital (30 mins)
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
            Nós vamos dissecar a presença digital dos seus 3 maiores concorrentes. Em 30 minutos,
            desenharemos a planta baixa para o seu novo site nascer destruindo a autoridade do
            mercado local.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            {[
              'Auditoria de Carregamento e UX',
              'Análise de Copy vs Concorrentes',
              'Mapeamento de Vazamento de Leads',
              'Plano de Ação (Aplica você mesmo se quiser)',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                </div>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <GlassButton
            href="https://wa.me/seunumerodewhatsapp"
            variant="primary"
            className="w-full sm:w-auto text-lg px-10 py-5"
          >
            Agendar Meu Diagnóstico (Grátis)
          </GlassButton>

          <p className="mt-4 text-sm text-white/40">
            Restam apenas 3 vagas na agenda da equipe executiva para esta semana.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
