'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

const lines = [
  { text: 'You show up. You deliver. You take care of everyone.', size: 'clamp(1.75rem, 4vw, 3.25rem)', weight: 600, italic: false },
  { text: 'And underneath all of it:', size: 'clamp(1.4rem, 3vw, 2.5rem)', weight: 300, italic: true },
  { text: 'the tight chest, the jaw tension, the lying awake at 2am.', size: 'clamp(1.1rem, 2.5vw, 2rem)', weight: 300, italic: true },
  { text: "you've been doing this alone for years.", size: 'clamp(1.4rem, 3vw, 2.5rem)', weight: 600, italic: false },
]

const internals = [
  '"I\'m so tired of being the strong one."',
  '"I don\'t even know who I am outside of what I do for other people."',
  '"Something from my past is still running me and I don\'t know how to stop it."',
  '"I\'ve tried therapy, I\'ve tried journaling. Why is nothing sticking?"',
]

const lineVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

function AnimatedLine({ line, delay }: { line: typeof lines[0]; delay: number }) {
  const words = line.text.split(' ')
  return (
    <motion.p
      style={{
        fontFamily: 'var(--font-fraunces)',
        lineHeight: 1.15,
        color: 'var(--text-on-dark)',
        fontSize: line.size,
        fontWeight: line.weight,
        fontStyle: line.italic ? 'italic' : 'normal',
        opacity: line.italic ? 0.75 : 1,
        marginBottom: '0.85rem',
        overflow: 'hidden',
      }}
      variants={lineVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

export function Mirror() {
  return (
    <section
      id="mirror"
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) 0',
        background: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none' }}>
        <Image src="/photos/lyda-close-face.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      {/* Background symbol */}
      <div
        className="absolute pointer-events-none select-none animate-glow-pulse"
        style={{
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(50vw, 400px)',
          aspectRatio: '1',
          opacity: 0.05,
        }}
      >
        <Image src="/symbol-clean.png" alt="" fill style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
      </div>

      <div className="content-container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
        {/* Main lines */}
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 5rem)' }}>
          {lines.map((line, i) => (
            <AnimatedLine key={i} line={line} delay={i * 0.05} />
          ))}
        </div>

        {/* Internal monologue */}
        <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: 'clamp(1.25rem, 4vw, 2rem)' }}>
          <ScrollReveal delay={0.05}>
            <p style={{
              color: 'var(--text-muted-on-dark)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontFamily: 'var(--font-jost)',
              marginBottom: '1.5rem',
            }}>
              The things you can&apos;t say out loud
            </p>
          </ScrollReveal>
          {internals.map((line, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="left">
              <p style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--text-on-dark)',
                opacity: 0.72,
                marginBottom: '1.25rem',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.65,
              }}>
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
