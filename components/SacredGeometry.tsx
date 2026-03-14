'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

interface Props {
  size?: number
  watermark?: boolean
  opacity?: number
  speed?: number
  variant?: 'default' | 'gold'
  glow?: boolean
  className?: string
}

export function SacredGeometry({
  size = 400,
  watermark = false,
  opacity,
  speed = 80,
  variant = 'default',
  glow = false,
  className = '',
}: Props) {
  const outerControls = useAnimation()
  const innerControls = useAnimation()

  const filter = variant === 'gold' ? 'var(--symbol-filter-gold)' : 'var(--symbol-filter)'
  const resolvedOpacity = opacity ?? (watermark ? 0.06 : 1)

  useEffect(() => {
    if (!watermark) {
      innerControls.start({
        rotate: 360,
        transition: { duration: speed, ease: 'linear', repeat: Infinity },
      })
      outerControls.start({
        rotate: -360,
        transition: { duration: speed * 1.4, ease: 'linear', repeat: Infinity },
      })
    }
  }, [innerControls, outerControls, watermark, speed])

  const pause = () => { innerControls.stop(); outerControls.stop() }
  const resume = () => {
    innerControls.start({ rotate: 360, transition: { duration: speed, ease: 'linear', repeat: Infinity } })
    outerControls.start({ rotate: -360, transition: { duration: speed * 1.4, ease: 'linear', repeat: Infinity } })
  }

  if (watermark) {
    return (
      <div
        className={`pointer-events-none select-none ${className}`}
        style={{ width: size, height: size, opacity: resolvedOpacity }}
      >
        <Image src="/symbol-clean.png" alt="" width={size} height={size} style={{ filter, width: '100%', height: 'auto' }} />
      </div>
    )
  }

  return (
    <motion.div
      className={`relative cursor-default ${className}`}
      style={{ width: size, height: size, opacity: resolvedOpacity }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: resolvedOpacity, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={pause}
      onHoverEnd={resume}
    >
      {/* Glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)', transform: 'scale(1.3)' }}
        />
      )}

      {/* Outer ring — counter-rotates, slightly larger, lower opacity */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.35, transform: 'scale(1.15)' }}
        animate={outerControls}
      >
        <Image src="/symbol-clean.png" alt="" width={size} height={size} style={{ filter, width: '100%', height: 'auto' }} />
      </motion.div>

      {/* Inner symbol — forward rotation with breathing */}
      <motion.div className="absolute inset-0" animate={innerControls}>
        <motion.div
          style={{ width: '100%', height: '100%' }}
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          <Image
            src="/symbol-clean.png"
            alt="The ART Method sacred geometry symbol"
            width={size}
            height={size}
            style={{ filter, width: '100%', height: 'auto' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
