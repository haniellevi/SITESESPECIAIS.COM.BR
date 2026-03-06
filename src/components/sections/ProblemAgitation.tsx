'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const ProblemAgitation = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-brand-cyan font-medium tracking-wide text-sm mb-4 uppercase"
        >
          A dura verdade sobre o seu mercado
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Você vai lançar sua marca com um template genérico ou com uma{' '}
          <span className="text-brand-cyan">Máquina de Vendas</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 leading-relaxed mb-12"
        >
          O seu negócio é inovador, mas se você lançá-lo com um site amador, a primeira impressão
          será destruída. No mercado atual, especialmente para clientes High-Ticket, a decisão de
          compra acontece nos primeiros 3 segundos de navegação.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Template Genérico',
              desc: "Projetos baratos gritam 'falta de capricho e orçamento'. Isso destrói sua autoridade instantaneamente.",
            },
            {
              title: 'Lentidão Absoluta',
              desc: 'O cliente High-Ticket não tem tempo a perder. Sites de baixo custo demoram para carregar e perdem a venda.',
            },
            {
              title: 'Zero Persuasão',
              desc: 'Um site que é apenas um panfleto esquecido na internet, incapaz de gerar agendamentos quentes desde o dia 1.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="text-brand-cyan">×</span> {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-white/50 italic"
        >
          Mas o problema não é a sua falta de esforço, e sim a vitrine que você está usando...
        </motion.p>
      </div>
    </section>
  )
}
