'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section
      id="about"
      style={{ background: 'var(--bg-primary)', padding: 'clamp(5rem, 12vw, 10rem) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle symbol watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: '-8%', bottom: '-5%', width: 'min(40vw, 320px)', aspectRatio: '1', opacity: 0.04 }}
      >
        <Image src="/symbol-clean.png" alt="" fill style={{ objectFit: 'contain', filter: 'var(--symbol-filter)' }} />
      </div>

      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Portrait */}
          <motion.div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: '3/4', maxHeight: '70vh', borderRadius: '2px' }}
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/photos/lyda-about.jpg"
              alt="Dr. Lyda Kermani in her session space"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </motion.div>

          {/* Text */}
          <div>
            <ScrollReveal delay={0.1}>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontFamily: 'var(--font-jost)',
                marginBottom: '1rem',
              }}>About</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                lineHeight: 1.0,
                marginBottom: '0.75rem',
              }}>Dr. Lyda Kermani</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontFamily: 'var(--font-jost)',
                marginBottom: '2rem',
              }}>Doctor of Acupuncture in Chinese Medicine · Reiki Master · EFT Certified Coach</p>
            </ScrollReveal>

            {[
              "Lyda's journey began in 2015, not in a clinic, but in the middle of her own pain. After her parents' divorce, the grief, anger, blame, and avoidance she was carrying were eating her alive from the inside. She knew something had to change.",
              "In 2018, she was introduced to EFT tapping. For the first time, she felt what peace could actually feel like in her body. Not as a concept. In her body. In 2019, she enrolled in a four-year doctoral program in Acupuncture and Chinese Medicine, was introduced to Reiki, and opened her private practice, helping people through tapping and Reiki while still in school.",
              "It wasn't until 2023 and 2024, in her final years of clinical training, that she began integrating all three modalities in the same session. Something incredible happened. Clients were healing more deeply, uncovering important truths, finding peace faster than she had ever seen. That's how the ART Method was born: discovered, not invented.",
            ].map((para, i) => (
              <ScrollReveal key={i} delay={0.35 + i * 0.1}>
                <p style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  opacity: 0.82,
                  marginBottom: '1.25rem',
                }}>
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
