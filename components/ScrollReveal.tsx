'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale'
  distance?: number
  once?: boolean
  style?: React.CSSProperties
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 50,
  once = true,
  style,
}: Props) {
  const getInitial = () => {
    switch (direction) {
      case 'up':    return { opacity: 0, y: distance }
      case 'down':  return { opacity: 0, y: -distance }
      case 'left':  return { opacity: 0, x: -distance }
      case 'right': return { opacity: 0, x: distance }
      case 'scale': return { opacity: 0, scale: 0.85 }
      default:      return { opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':  return { opacity: 1, y: 0 }
      case 'left':
      case 'right': return { opacity: 1, x: 0 }
      case 'scale': return { opacity: 1, scale: 1 }
      default:      return { opacity: 1 }
    }
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
