'use client'

import { ScrollReveal } from './ScrollReveal'
import { SacredGeometry } from './SacredGeometry'
import { Marquee } from './Marquee'
import Image from 'next/image'

// Session execution order — NOT the acronym order.
// ART acronym = Acupuncture, Reiki, Tapping (the three modalities / brand name)
// Session sequence = Awareness → EFT Tapping → Reiki → Acupuncture
const steps = [
  {
    number: '01',
    label: 'Awareness',
    sub: 'Conversation + Mind',
    body: "Using reflection and guided conversation, Lyda identifies what is truly holding you back, often before you've named it yourself. This is the cognitive and relational opening of the session.",
    image: '/photos/session-room.jpg',
  },
  {
    number: '02',
    label: 'EFT Tapping',
    sub: 'Heart + Nervous System + Meridians',
    body: "Tapping opens the heart, regulates the nervous system, and creates movement through the body's meridians, helping you witness your fears and patterns with less resistance.",
    image: '/photos/hands-closeup.jpg',
  },
  {
    number: '03',
    label: 'Reiki',
    sub: 'Energetic Field',
    body: "Working with your energetic field, Lyda listens to the intelligence of your body and shifts what has been stuck. The session is guided by what your body itself communicates.",
    image: '/photos/organic-texture.jpg',
  },
  {
    number: '04',
    label: 'Acupuncture',
    sub: 'Physical Body + Five Elements',
    body: "Acupuncture opens the body's portals and creates a pathway for deeper balance, bringing mind, body, and spirit into harmony across the five elements.",
    image: '/photos/needles-detail.jpg',
  },
]

const MARQUEE_TEXT = 'ACUPUNCTURE · REIKI · EFT TAPPING · THE ART METHOD · NERVOUS SYSTEM REGULATION · THE ART METHOD ·'

export function ArtMethod() {
  return (
    <section
      id="method"
      style={{ background: 'var(--bg-forest)', color: 'var(--text-on-dark)', overflow: 'hidden' }}
      className="py-20 md:py-32"
    >
      {/* Marquee — responsive font size */}
      <div style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)', overflow: 'hidden' }}>
        <Marquee
          text={MARQUEE_TEXT}
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            letterSpacing: '0.04em',
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 700,
            color: 'var(--text-on-dark)',
            opacity: 0.2,
          }}
          speed={50}
        />
      </div>

      <div className="content-container">
        {/* Section intro */}
        <ScrollReveal className="mb-12 md:mb-20">
          <div style={{ maxWidth: '640px' }}>
            <p style={{
              color: 'var(--text-muted-on-dark)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontFamily: 'var(--font-jost)',
              marginBottom: '1.5rem',
            }}>The ART Method</p>
            <p style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 300,
              color: 'var(--text-on-dark)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              lineHeight: 1.55,
            }}>
              Most practitioners work one layer at a time. The ART Method works the nervous system, the energy body, the mind, and the emotions. All in the same session. The change compounds because every layer is addressed at once.
            </p>
          </div>
        </ScrollReveal>

        {/* Symbol + Steps — responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Sacred geometry — centered on mobile, sticky on desktop */}
          <div className="flex justify-center md:justify-center md:sticky md:top-24">
            <SacredGeometry
              size={320}
              variant="gold"
              glow={true}
              speed={70}
              className="w-[220px] h-[220px] md:w-[320px] md:h-[320px]"
            />
          </div>

          {/* Steps */}
          <div>
            {steps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.12} direction="right">
                <div style={{ borderTop: '1px solid rgba(250,252,232,0.12)', paddingTop: '1.75rem', marginBottom: '2rem' }}>
                  {/* Step number */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontSize: '0.65rem',
                      color: 'var(--accent-gold)',
                      letterSpacing: '0.2em',
                      fontWeight: 400,
                    }}>{step.number}</span>
                    <span style={{
                      color: 'var(--text-muted-on-dark)',
                      fontSize: '0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontFamily: 'var(--font-jost)',
                    }}>{step.sub}</span>
                  </div>

                  {/* Step label + image */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 600,
                      color: 'var(--text-on-dark)',
                      fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                      lineHeight: 1.1,
                      flex: 1,
                    }}>{step.label}</h3>
                    <div style={{ width: '52px', height: '52px', borderRadius: '2px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                      <Image src={step.image} alt={step.label} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-jost)',
                    color: 'var(--text-on-dark)',
                    opacity: 0.68,
                    lineHeight: 1.75,
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
                  }}>{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
