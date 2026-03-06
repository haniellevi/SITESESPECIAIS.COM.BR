'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`faq-item group border border-white/5 rounded-2xl transition-all overflow-hidden ${isOpen ? 'bg-white/[0.04] active' : 'bg-white/[0.02] hover:bg-white/[0.04]'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="text-lg text-white/90 group-hover:text-white transition-colors font-medium">
          {question}
        </span>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 shrink-0 ml-4">
          <ChevronDown
            className={`text-white text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 text-luxota-dim leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '"Agora não é o momento certo."',
      answer:
        'Cada semana sem site é uma semana dando clientes ao concorrente. A conversa é gratuita — descubra o que está deixando na mesa.',
    },
    {
      question: '"Já tenho redes sociais."',
      answer:
        'Redes são terreno alugado. Site é seu endereço fixo no Google, funciona 24h e é a base para qualquer estratégia funcionar de verdade.',
    },
    {
      question: '"É muito caro."',
      answer:
        'Se 2 clientes novos por mês chegarem pelo Google, o site se paga em semanas. Isso não é gasto — é o investimento com maior retorno para negócios locais.',
    },
    {
      question: '"Já fiz site antes e não deu resultado."',
      answer:
        'Site de template sem estratégia é loja no deserto. Nossos projetos são construídos para aparecer, converter e gerar resultado real.',
    },
    {
      question: '"Não entendo nada de tecnologia."',
      answer:
        'Você não precisa. Cuidamos de tudo: domínio, hospedagem, design, textos, publicação. Você só valida o resultado.',
    },
  ]

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
