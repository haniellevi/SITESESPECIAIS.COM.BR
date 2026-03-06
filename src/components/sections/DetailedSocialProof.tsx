'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const DetailedSocialProof = () => {
  const testimonials = [
    {
      name: 'Marcus Xavier',
      role: 'CEO, Alpha Ventures',
      text: 'Eu achava que site era tudo igual até conhecer a Sites Especiais. Eles não mudaram o visual, eles mudaram o nosso posicionamento comercial. Conseguimos aumentar nosso ticket médio em 35% nos primeiros dois meses.',
      metrics: '+35% Ticket Médio',
    },
    {
      name: 'Dra. Carolina Mendes',
      role: 'Mendes & Associados',
      text: 'Nosso antigo site espantava clientes premium. Agora, a primeira impressão transmite a autoridade de 15 anos de mercado que temos. A agenda clínica nunca esteve tão qualificada.',
      metrics: 'Agenda 100% Qualificada',
    },
    {
      name: 'Fernando Costa',
      role: 'Diretor Comercial, TechM',
      text: 'O carregamento de meio segundo fez toda a diferença. Nossas campanhas de tráfego pago pararam de desperdiçar dinheiro e o ROAS dobrou.',
      metrics: '2x ROAS em campanhas',
    },
  ]

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Não acredite em nós. <br className="hidden md:block" />
            <span className="text-brand-cyan">Acredite nos números.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.08] hover:border-brand-electric/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl text-brand-electric opacity-50 font-serif">&quot;</div>
                <div className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-xs font-bold rounded-full group-hover:bg-brand-electric/20 group-hover:text-brand-electric transition-colors">
                  {t.metrics}
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-8">{t.text}</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-electric to-brand-cyan opacity-80" />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
