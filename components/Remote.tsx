'use client'

import { ScrollReveal } from './ScrollReveal'
import Image from 'next/image'

export function Remote() {
  return (
    <section
      style={{
        background: 'var(--bg-forest)',
        color: 'var(--text-on-dark)',
        padding: 'clamp(5rem, 12vw, 10rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background symbol */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(45vw, 360px)',
          aspectRatio: '1',
          opacity: 0.05,
        }}
      >
        <Image src="/symbol-clean.png" alt="" fill style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
      </div>

      <div className="content-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — declarative statement */}
          <div>
            <ScrollReveal delay={0.05}>
              <p style={{
                color: 'var(--text-muted-on-dark)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontFamily: 'var(--font-jost)',
                marginBottom: '1.75rem',
              }}>
                How We Work Together
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h2 style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 600,
                color: 'var(--text-on-dark)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.05,
                marginBottom: '1rem',
              }}>
                All sessions are conducted remotely, starting May 2026.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p style={{
                fontFamily: 'var(--font-jost)',
                color: 'var(--text-muted-on-dark)',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.7,
              }}>
                Lyda works with clients anywhere in the world.<br />
                <span style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', opacity: 0.7 }}>
                  If you are in the San Diego area, you can experience in-person sessions until May.
                </span>
              </p>
            </ScrollReveal>
          </div>

          {/* Right — explanation */}
          <div>
            <ScrollReveal delay={0.25}>
              <p style={{
                fontFamily: 'var(--font-jost)',
                color: 'var(--text-on-dark)',
                opacity: 0.78,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}>
                Clients in virtual sessions report the same sensations as in-person: heat, release, a felt shift in the body, without a needle in sight. That&apos;s not a coincidence. It&apos;s how energy medicine works.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.33}>
              <p style={{
                fontFamily: 'var(--font-jost)',
                color: 'var(--text-on-dark)',
                opacity: 0.78,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}>
                In a remote ART session, Lyda works with your energetic field through presence, intention, guided awareness, and tapping. What changes is not physical contact. It&apos;s your nervous system responding to the work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--text-on-dark)',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.6,
                opacity: 0.9,
              }}>
                Remote energy work has been practiced in Chinese medicine for centuries. The body doesn&apos;t need to be in the room for energy to move.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
