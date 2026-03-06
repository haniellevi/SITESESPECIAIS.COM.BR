'use client'

import { ArrowRight } from 'lucide-react'

export function PrimaryButton({
  children,
  className = '',
  href,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}) {
  const content = (
    <>
      <div className="btn-glow"></div>
      <span className="relative z-10 text-sm font-bold flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
    </>
  )

  const baseClasses = `group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] inline-block cursor-pointer ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export function SecondaryButton({
  children,
  className = '',
  href,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}) {
  const baseClasses = `px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 hover:shadow-lg inline-block cursor-pointer ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export function NavButton({
  children,
  href,
  onClick,
  variant = 'primary',
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
}) {
  const baseClasses =
    variant === 'primary'
      ? 'group px-6 py-2.5 text-xs font-bold text-luxota-bg bg-white rounded-full hover:bg-luxota-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] inline-flex items-center cursor-pointer whitespace-nowrap'
      : 'group px-4 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors inline-flex items-center cursor-pointer whitespace-nowrap'

  const arrow =
    variant === 'primary' ? (
      <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
    ) : null

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children} {arrow}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children} {arrow}
    </button>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
      <span className="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#4FD1C5]"></span>
      <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">
        {children}
      </span>
    </div>
  )
}
