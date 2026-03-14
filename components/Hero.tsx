'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ACUITY_URL = 'https://bookwithlydakermani.as.me/discoverysession'
const SUBSTACK_URL = 'https://substack.com/@drlydakermani'

const wordGroups = [
  { words: ['You', 'look', 'fine.'] },
  { words: ['You', 'know', "you're", 'not.'] },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 24, rotateX: -20 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const symbolY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const symbolOpacity = useTransform(scrollYProgress, [0, 0.8], [0.06, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
      className="min-h-screen flex flex-col pt-16"
    >
      {/* Large background symbol — parallax */}
      <motion.div
        className="absolute pointer-events-none select-none"
        style={{
          right: '-5%',
          top: '50%',
          translateY: '-50%',
          y: symbolY,
          opacity: symbolOpacity,
          width: 'min(70vw, 600px)',
          aspectRatio: '1',
        }}
      >
        <Image
          src="/symbol-clean.png"
          alt=""
          fill
          style={{ objectFit: 'contain', filter: 'var(--symbol-filter)' }}
        />
      </motion.div>

      {/* Mobile layout: portrait top, text bottom */}
      {/* Desktop layout: text left, portrait right — 2 columns */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 content-container py-8 md:py-0 md:items-center gap-0 md:gap-16">

        {/* Portrait — on mobile appears first (order-1), on desktop appears second (order-2) */}
        <motion.div
          className="order-1 md:order-2 relative w-full"
          style={{ aspectRatio: '3/4', maxHeight: '60vh', overflow: 'hidden', borderRadius: '2px' }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/photos/lyda-hero.jpg"
            alt="Dr. Lyda Kermani"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(9, 22, 34, 0.2) 100%)',
            }}
          />
        </motion.div>

        {/* Text — on mobile appears second (order-2), on desktop appears first (order-1) */}
        <motion.div
          className="order-2 md:order-1 flex flex-col justify-center py-10 md:py-20"
          style={{ position: 'relative', zIndex: 1, y: textY }}
        >
          {/* Credentials */}
          <motion.p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-jost)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: '1.75rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Doctor of Acupuncture in Chinese Medicine · Reiki Master · EFT Certified Coach
          </motion.p>

          {/* Headline — word by word */}
          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 700,
              lineHeight: 0.9,
              marginBottom: '1.75rem',
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              perspective: '800px',
            }}
          >
            {wordGroups.map((group, gi) => (
              <motion.span
                key={gi}
                className="block"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {group.words.map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordVariant}
                    className="inline-block mr-[0.2em]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          {/* Dream outcome line — arrives after headline settles */}
          <motion.div
            style={{ marginBottom: '1.75rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ width: '32px', height: '1px', background: 'var(--accent-gold)', marginBottom: '1.25rem' }} />
            <p style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.9rem)',
              lineHeight: 1.35,
              color: 'var(--text-primary)',
              opacity: 0.82,
            }}>
              Calm in your chest. Clear in your mind.<br />
              Trusting yourself again.
            </p>
          </motion.div>

          {/* Subhead */}
          <motion.p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              marginBottom: '2.25rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Nervous system regulation for high-functioning people who are ready to stop holding it together alone.
          </motion.p>

          {/* Specialty tags */}
          <motion.p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.65rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--accent-gold)',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.55 }}
          >
            Anxiety · Burnout · Stress
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={ACUITY_URL} className="btn-primary">
              Book a Session
            </a>
            <a href="#method" className="btn-secondary">
              See the Work
            </a>
          </motion.div>

          {/* Newsletter subtle link */}
          <motion.a
            href={SUBSTACK_URL}
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-jost)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Or join the newsletter →
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        style={{ color: 'var(--text-muted)' }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-jost)' }}>Scroll</span>
        <motion.div
          style={{ width: '1px', height: '32px', background: 'var(--accent-gold)' }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
