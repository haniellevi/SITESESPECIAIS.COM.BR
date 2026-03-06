'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/utilities/ui'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)

      const x = e.clientX
      const y = e.clientY

      setMousePosition({ x, y })
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseout', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer trailing ring with flashlight/glow effect */}
      <motion.div
        className={cn(
          'absolute rounded-full border border-white/20 flex items-center justify-center backdrop-invert-[0.05]',
          'transition-all duration-300 ease-out',
          isHovering ? 'w-16 h-16 bg-white/10' : 'w-10 h-10 bg-transparent',
        )}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0,
        }}
        style={{
          left: '-1.25rem', // Center the 40px circle (w-10) -> -20px.
          top: '-1.25rem',
          translateX: isHovering ? '-0.75rem' : '0', // Adjust center when size changes (16px diff = 8px or we can just shift it by half the extra width. 16px - 10px = w-16=64px, w-10=40px. Diff 24px. Half is 12px = 0.75rem)
          translateY: isHovering ? '-0.75rem' : '0',
          // Flashlight-like subtle glow
          boxShadow: isHovering
            ? '0 0 20px 2px rgba(255, 255, 255, 0.15)'
            : '0 0 10px 1px rgba(255, 255, 255, 0)',
        }}
      />

      {/* Inner dot (immediate) */}
      <motion.div
        className={cn(
          'absolute w-1.5 h-1.5 rounded-full bg-white',
          'transition-opacity duration-300',
          isHovering ? 'opacity-0' : 'opacity-100', // Hide dot when hovering for a cleaner look with the expanded ring
        )}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0,
        }}
        style={{
          left: '-0.1875rem', // Center the 6px dot (-3px)
          top: '-0.1875rem',
        }}
      />
    </div>
  )
}
