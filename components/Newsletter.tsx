'use client'

import { ScrollReveal } from './ScrollReveal'
import { SacredGeometry } from './SacredGeometry'
import Image from 'next/image'

const SUBSTACK_URL = 'https://substack.com/@drlydakermani'

export function Newsletter() {
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
      {/* Background texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.07, pointerEvents: 'none' }}>
        <Image src="/photos/organic-texture.jpg" alt="" fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Symbol centered behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-slow-rotate" style={{ opacity: 0.06, width: 'min(60vw, 400px)', aspectRatio: '1', position: 'relative' }}>
          <Image src="/symbol-clean.png" alt="" fill style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
      </div>

      <div className="content-container text-center" style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
        <ScrollReveal direction="scale">
          <div className="flex justify-center mb-8">
            <SacredGeometry size={80} variant="gold" speed={120} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 600,
            color: 'var(--text-on-dark)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            A letter from Lyda,<br />every week.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p style={{
            fontFamily: 'var(--font-jost)',
            color: 'var(--text-muted-on-dark)',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            Personal stories from inside the session room. Breakthroughs, hers and her clients&apos;. The messages that come through when she gets quiet enough to receive them. Her most honest writing, so we can all heal together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Join the Newsletter
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
