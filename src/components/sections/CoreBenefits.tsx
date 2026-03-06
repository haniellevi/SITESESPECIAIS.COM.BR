'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const CoreBenefits = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="resultados">
      {/* Accent Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              O que acontece na prática após o seu novo site ir ao ar?
            </h2>

            <ul className="space-y-8">
              {[
                {
                  title: 'Autoridade inquestionável',
                  desc: 'Você deixa de ser comparado pelo preço. Seu cliente percebe que você joga em outra liga.',
                },
                {
                  title: 'Eficiência de Vendas',
                  desc: 'O site responde às dúvidas básicas. O cliente que chega no seu WhatsApp já vem pronto para comprar.',
                },
                {
                  title: 'Domínio no Google',
                  desc: 'As estruturas SEO-First que usamos começam a indexar organicamente os seus melhores serviços.',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand-electric/20 flex items-center justify-center border border-brand-electric/50">
                      <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm relative z-10"
            >
              <p className="text-xl italic text-white/80 leading-relaxed mb-6 font-serif">
                &quot;Nosso faturamento subiu 40% em 3 meses simplesmente porque os clientes pararam
                de pedir desconto ao entrar no site novo. A percepção de valor mudou
                completamente.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                <div>
                  <h5 className="font-bold text-white">Roberto Dias</h5>
                  <p className="text-sm text-white/50">Sócio, Tech Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Decoração Traz do Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-electric/20 to-transparent blur-2xl transform translate-x-8 translate-y-8 rounded-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
