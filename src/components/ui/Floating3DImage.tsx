'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Floating3DImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  animationDelay?: number
}

export const Floating3DImage = ({
  src,
  alt,
  width = 500,
  height = 500,
  className = '',
  priority = false,
  animationDelay = 0,
}: Floating3DImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: animationDelay,
      }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotateX: [-5, 5, -5],
          rotateY: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ perspective: 1000 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          priority={priority}
        />
      </motion.div>
    </motion.div>
  )
}
