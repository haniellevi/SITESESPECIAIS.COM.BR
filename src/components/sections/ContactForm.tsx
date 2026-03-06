'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react'

type FormData = {
  nome: string
  email: string
  telefone: string
  tipo: string
  descricao: string
  orcamento: string
  prazo: string
}

const projectTypes = [
  'Site Institucional',
  'E-Commerce',
  'Landing Page',
  'Portfólio',
  'Blog',
  'Outro',
]

const budgetRanges = [
  'Até R$ 5.000',
  'R$ 5.000 - R$ 10.000',
  'R$ 10.000 - R$ 20.000',
  'Acima de R$ 20.000',
]

const deadlines = ['O mais rápido possível', 'Em 2-4 semanas', 'Em 1-2 meses', 'Sem pressa']

export function ContactForm() {
  const [step, setStep] = useState(1)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const buildWhatsAppMessage = (data: FormData) => {
    const msg = `Olá! Gostaria de solicitar um orçamento.

*Dados Pessoais:*
• Nome: ${data.nome}
• Email: ${data.email}
• Telefone: ${data.telefone}

*Sobre o Projeto:*
• Tipo: ${data.tipo}
• Descrição: ${data.descricao}
• Orçamento: ${data.orcamento}
• Prazo: ${data.prazo}`

    return `https://wa.me/5589994315927?text=${encodeURIComponent(msg)}`
  }

  const onSubmit = (data: FormData) => {
    const url = buildWhatsAppMessage(data)
    window.open(url, '_blank')
  }

  const nextStep = () => {
    setStep(2)
  }

  // Validate step 1 fields
  const nome = watch('nome')
  const email = watch('email')
  const telefone = watch('telefone')
  const tipo = watch('tipo')
  const canProceed = nome && email && telefone && tipo

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-medium text-primary tracking-[0.2em] uppercase mb-3 block">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Vamos criar algo <em className="text-primary italic">especial</em>?
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Preencha o formulário e receba um orçamento personalizado via WhatsApp.
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex-1 h-1 rounded-full bg-primary" />
            <div
              className={`flex-1 h-1 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-border'}`}
              style={{ transitionDuration: 'var(--duration-base)' }}
            />
          </div>

          <div className="text-xs font-mono text-muted-foreground mb-6 text-center">
            Etapa {step} de 2 — {step === 1 ? 'Seus Dados' : 'Sobre o Projeto'}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1 */}
            <div className={step === 1 ? 'block' : 'hidden'}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    {...register('nome', { required: true })}
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    {...register('telefone', { required: true })}
                    type="tel"
                    placeholder="(00) 0 0000-0000"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Tipo de projeto *
                  </label>
                  <select
                    {...register('tipo', { required: true })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o tipo
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-sans font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ transitionDuration: 'var(--duration-fast)' }}
              >
                Próxima Etapa
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Step 2 */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Descreva seu projeto *
                  </label>
                  <textarea
                    {...register('descricao', { required: true })}
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto, público-alvo e objetivos..."
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Orçamento estimado
                  </label>
                  <select
                    {...register('orcamento')}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione a faixa
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                    Prazo desejado
                  </label>
                  <select
                    {...register('prazo')}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o prazo
                    </option>
                    {deadlines.map((deadline) => (
                      <option key={deadline} value={deadline}>
                        {deadline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3.5 border border-border text-foreground font-sans font-medium rounded-xl hover:border-primary hover:text-primary transition-all flex items-center gap-2"
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                >
                  <ArrowLeft size={18} />
                  Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-sans font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all"
                  style={{ transitionDuration: 'var(--duration-fast)' }}
                >
                  <MessageCircle size={18} />
                  Enviar via WhatsApp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
