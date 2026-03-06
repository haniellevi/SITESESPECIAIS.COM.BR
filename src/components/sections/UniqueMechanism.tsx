'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SpotlightCard } from '../ui/SpotlightCard'
import { Floating3DImage } from '../ui/Floating3DImage'

export const UniqueMechanism = () => {
  return (
    <section className="py-24 bg-brand-dark relative" id="metodologia">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Apresentamos a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-cyan">
              Engenharia Comportamental
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Nós não fazemos sites. Nós construímos ativos digitais programados para converter
            visitantes em clientes pagantes usando neurologia, design invisível e copywriting
            agressivo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Design Invisível',
              desc: "A estética não deve distrair, deve conduzir. Usamos o 'Organic Tech' para criar confiança instantânea.",
              colSpan: 'lg:col-span-2',
              delay: 0.2,
              image: '/images/icon_3d_exclusivity.png',
            },
            {
              title: 'Neuro-Copywriting',
              desc: 'Palavras que ativam o córtex de decisão. Sem jargões técnicos, apenas a transformação que seu cliente quer.',
              colSpan: 'lg:col-span-1',
              delay: 0.3,
              image: '/images/icon_3d_psychology.png',
            },
            {
              title: 'Velocidade Absoluta',
              desc: 'Seu site carregando na velocidade em que o seu cliente toma a decisão. Menos de 1 segundo.',
              colSpan: 'lg:col-span-1',
              delay: 0.4,
              image: '/images/icon_3d_performance.png',
            },
            {
              title: 'Otimização Contínua',
              desc: 'Estruturas preparadas para o Google te amar e os usuários chegarem até você sem esforço.',
              colSpan: 'lg:col-span-2',
              delay: 0.5,
              image: null,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: item.delay }}
              className={item.colSpan}
            >
              <SpotlightCard className="h-full flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed max-w-md">{item.desc}</p>
                </div>
                {item.image && (
                  <Floating3DImage
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="absolute -bottom-10 -right-10 opacity-50 mix-blend-screen pointer-events-none"
                    animationDelay={item.delay + 0.2}
                  />
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
