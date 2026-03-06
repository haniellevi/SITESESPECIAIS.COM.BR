'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Meu site atual funciona. Preciso mesmo de um novo?',
      a: 'Se o seu site funciona para mostrar quem você é, mas não funciona para fechar novos contratos sem intervenção humana, ele é um panfleto digital. Sites Especiais são Vendedores Executivos que trabalham 24/7. A diferença aparece no caixa.',
    },
    {
      q: 'Vocês vão ficar me empurrando venda depois da call?',
      a: 'Não trabalhamos com pressão porque não precisamos dela. A call é um mapeamento técnico e estratégico. Se houver fit para nós criarmos o seu site, faremos uma proposta. Se não, você sai com um plano de ação para sua equipe aplicar.',
    },
    {
      q: 'Isso serve para negócios B2B ou só e-commerce?',
      a: 'Nosso foco principal é B2B e Profissionais Autônomos de ticket elevado (Advogados, Médicos, Consultorias, Engenharia, Construtoras). Nestes mercados, quem passa a maior percepção de autoridade leva o cliente.',
    },
    {
      q: 'Quanto tempo demora para desenvolver um site especial?',
      a: 'Nosso ciclo médio é de 15 a 30 dias a partir da definição da arquitetura de informações. Usamos uma metodologia ágil focada em entrega contínua.',
    },
  ]

  return (
    <section className="py-24 bg-brand-dark container mx-auto px-4 max-w-4xl" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Dúvidas Frequentes</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 border-brand-electric/30' : 'bg-transparent'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center text-white focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <span
                  className={`text-brand-cyan transition-transform duration-300 text-2xl ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
