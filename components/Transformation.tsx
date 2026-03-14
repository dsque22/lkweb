'use client'

import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

const before = [
  "Anxious. Always on. Never fully off.",
  "Exhausted in a way sleep doesn't fix.",
  "Losing herself in what she does for everyone else.",
]

const after = [
  'Regulated. Calm. Safe in her own skin.',
  'Clear. Present. Trusting herself again.',
  'Remembering who she is.',
]

export function Transformation() {
  return (
    <section
      style={{ background: 'var(--bg-primary)', padding: 'clamp(5rem, 12vw, 10rem) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background symbol */}
      <div
        className="absolute pointer-events-none"
        style={{ right: '-5%', top: '50%', transform: 'translateY(-50%)', width: 'min(45vw, 350px)', aspectRatio: '1', opacity: 0.04 }}
      >
        <Image src="/symbol-clean.png" alt="" fill style={{ objectFit: 'contain', filter: 'var(--symbol-filter)' }} />
      </div>

      <div className="content-container">
        {/* Title */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1rem' }}>
            The Shift
          </p>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            lineHeight: 1.05,
          }}>Where you&apos;ve been.<br />Where you&apos;re going.</h2>
        </ScrollReveal>

        {/* Before / After — stacked on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-8 md:gap-0 items-start">

          {/* Before */}
          <div>
            <ScrollReveal delay={0.1}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1.75rem' }}>
                Before
              </p>
            </ScrollReveal>
            {before.map((line, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <p style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  opacity: 0.5,
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  lineHeight: 1.35,
                  marginBottom: '1.25rem',
                }}>{line}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider — hidden on mobile */}
          <div className="hidden md:flex justify-center pt-16">
            <div style={{ width: '1px', height: '160px', background: 'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)' }} />
          </div>

          {/* After */}
          <div className="md:pt-0">
            <ScrollReveal delay={0.3}>
              <p style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1.75rem' }}>
                After
              </p>
            </ScrollReveal>
            {after.map((line, i) => (
              <ScrollReveal key={i} delay={0.38 + i * 0.1} direction="right">
                <p style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  lineHeight: 1.35,
                  marginBottom: '1.25rem',
                }}>{line}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
