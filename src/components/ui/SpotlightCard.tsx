'use client'

import React, { useState, useRef } from 'react'

export const SpotlightCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-brand-card p-8 group transition-colors duration-500 hover:border-brand-cyan/30 ${className}`}
      style={
        {
          '--mouse-x': `${position.x}px`,
          '--mouse-y': `${position.y}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: 'var(--card-spotlight)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
