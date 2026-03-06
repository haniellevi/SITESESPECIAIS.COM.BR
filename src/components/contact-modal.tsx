'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cidade: '',
    possuiSite: 'Não',
    whatsapp: '',
    email: '',
    horario: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const text = `*Novo Contato - Diagnóstico Gratuito*
    
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*Cidade:* ${formData.cidade}
*Já possui site:* ${formData.possuiSite}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email}
*Melhor horário:* ${formData.horario}`

    const whatsappNumber = '5589994315927'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.error('Failed to send email', error)
    }

    window.open(whatsappUrl, '_blank')
    setIsSubmitting(false)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-[#08080A] border border-white/10 rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-2xl relative w-full max-w-lg max-h-full overflow-y-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxota-accent to-transparent opacity-50"></div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
                type="button"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
                  Agendar Diagnóstico
                </h2>
                <p className="text-luxota-dim text-sm mb-6 md:mb-8">
                  Preencha os dados abaixo para falarmos com um especialista.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                    Nome Completo
                  </label>
                  <input
                    required
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      required
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors"
                      placeholder="Sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      Cidade
                    </label>
                    <input
                      required
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors"
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      E-mail
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      Já possui site?
                    </label>
                    <select
                      name="possuiSite"
                      value={formData.possuiSite}
                      onChange={handleChange}
                      className="w-full bg-[#0d0d12] border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors appearance-none"
                    >
                      <option value="Não">Não</option>
                      <option value="Sim">Sim</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-mono text-luxota-dim uppercase tracking-wider mb-1.5 md:mb-2">
                      Melhor horário
                    </label>
                    <select
                      required
                      name="horario"
                      value={formData.horario}
                      onChange={handleChange}
                      className="w-full bg-[#0d0d12] border border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-luxota-accent transition-colors appearance-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="Manhã (08h - 12h)">Manhã (08h - 12h)</option>
                      <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                      <option value="Noite (Após 18h)">Noite (Após 18h)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-6 py-3.5 md:px-9 md:py-4 bg-white text-luxota-bg rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] font-bold disabled:opacity-70 disabled:pointer-events-none text-sm md:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-luxota-accent via-white to-luxota-accent opacity-0 group-hover:opacity-40 blur-md transition-opacity"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Enviando...' : 'Falar com Especialista'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
