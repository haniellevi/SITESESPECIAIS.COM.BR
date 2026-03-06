'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GlassButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export const GlassButton = ({
  href,
  children,
  variant = 'primary',
  className = '',
}: GlassButtonProps) => {
  const isPrimary = variant === 'primary'

  return (
    <Link href={href} className="inline-block relative group" passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative z-10 font-bold overflow-hidden rounded-full transition-all duration-300 
          ${
            isPrimary
              ? 'bg-brand-electric text-background shadow-[0_0_20px_rgba(45,121,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] px-8 py-4 text-lg'
              : 'bg-white/5 border border-white/10 text-white backdrop-blur-premium hover:bg-white/10 hover:border-brand-electric/50 px-6 py-3 text-base'
          } ${className}`}
      >
        {isPrimary && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-electric to-brand-cyan opacity-100 z-[-1]" />
        )}
        {/* Inner glow para simular volume 3D */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none z-[-1]" />

        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </motion.div>
    </Link>
  )
}
