'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { VideoTile } from './VideoTile'

const videos = [
  { id: 1, src: '/testimonials/review1.mov', placeholder: '[Client video — 2:30]' },
  { id: 2, src: '/testimonials/review2.mp4', placeholder: '[Client video — 1:45]' },
]

const screenshotFiles = [
  'FullSizeRender.jpeg',
  'FullSizeRender (1).jpeg',
  'FullSizeRender (2).jpeg',
  'FullSizeRender (3).jpeg',
  'FullSizeRender (4).jpeg',
  'FullSizeRender (5).jpeg',
  'FullSizeRender (6).jpeg',
  'FullSizeRender (7).jpeg',
  'FullSizeRender (8).jpeg',
  'FullSizeRender (9).jpeg',
  'FullSizeRender (10).jpeg',
  'FullSizeRender (11).jpeg',
  'FullSizeRender (12).jpeg',
  'FullSizeRender (13).jpeg',
  'FullSizeRender (14).jpeg',
  'FullSizeRender (15).jpeg',
  'FullSizeRender (16).jpeg',
  'FullSizeRender (17).jpeg',
  'FullSizeRender (18).jpeg',
  'FullSizeRender (19).jpeg',
  'FullSizeRender (20).jpeg',
  'FullSizeRender (21).jpeg',
  'FullSizeRender (22).jpeg',
  'FullSizeRender (23).jpeg',
  'FullSizeRender (24).jpeg',
  'FullSizeRender (25).jpeg',
  'FullSizeRender (26).jpeg',
  'FullSizeRender (27).jpeg',
  'FullSizeRender (28).jpeg',
]

const screenshots = screenshotFiles.map(f => `/testimonials/${encodeURIComponent(f)}`)

// Subtle rotations for organic pinned-photo feel
const rotations = [-2, 1.5, -1, 2.5, -1.8, 0.8, -2.2, 1.2, -0.5, 2, -1.5, 0.5,
  -1.2, 2.2, -0.8, 1.8, -2.5, 0.6, -1.4, 2.1, -0.9, 1.6, -2.3, 0.4, -1.7, 1.9, -0.7, 2.4, -1.1]

const pullQuotes = [
  {
    id: 1,
    text: 'Lyda has made such a difference in my way of life over the past few months! Not only does she heal but she teaches as well and I find myself constantly using the tools I have been given through reiki and coaching with her. As someone who was previously a "nonbeliever" I am 100% converted and highly recommend trying a new method of treatment!',
    attribution: 'Kayli',
  },
  {
    id: 2,
    text: 'Every time I see Lyda, I leave feeling lighter. Her positivity and warmth as she has guided me through my healing journey has been transformative. I look forward to every session with her and am so thankful to have her with me on this journey.',
    attribution: 'Miranda',
  },
]

const INITIAL_COUNT = 6

function ScreenshotCard({ src, rotation }: { src: string; rotation: number }) {
  return (
    <div style={{
      maxWidth: '200px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      transform: `rotate(${rotation}deg)`,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Client review" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  )
}

export function TestimonialsWall() {
  const [expanded, setExpanded] = useState(false)

  const initialScreenshots = screenshots.slice(0, INITIAL_COUNT)
  const extraScreenshots = screenshots.slice(INITIAL_COUNT)

  return (
    <section
      id="testimonials"
      style={{ background: 'var(--bg-primary)', padding: 'clamp(5rem, 12vw, 10rem) 0', overflow: 'hidden' }}
    >
      <div className="content-container" style={{ marginBottom: '6rem' }}>
        <ScrollReveal>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1rem' }}>
            In Their Words
          </p>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            lineHeight: 1.05,
          }}>The shift, in real words.</h2>
        </ScrollReveal>
      </div>

      {/* Desktop: CSS columns masonry */}
      <div className="hidden md:block content-container">
        <div style={{ columns: 3, columnGap: '1.5rem' }}>
          <ScrollReveal className="break-inside-avoid mb-5">
            <div style={{ maxWidth: '240px', margin: '0 auto' }}>
              <VideoTile src={videos[0].src} placeholder={videos[0].placeholder} aspectRatio="9/16" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="break-inside-avoid mb-5">
            <blockquote style={{ padding: '2.5rem 0' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.5rem', lineHeight: 1.4 }}>
                &ldquo;{pullQuotes[0].text}&rdquo;
              </p>
              <cite style={{ display: 'block', marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-jost)', fontStyle: 'normal' }}>
                {pullQuotes[0].attribution}
              </cite>
            </blockquote>
          </ScrollReveal>
          {initialScreenshots.slice(0, 3).map((src, i) => (
            <ScrollReveal key={src} delay={0.15 + i * 0.05} className="break-inside-avoid mb-5">
              <ScreenshotCard src={src} rotation={rotations[i]} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.2} className="break-inside-avoid mb-5">
            <div style={{ maxWidth: '240px', margin: '0 auto' }}>
              <VideoTile src={videos[1].src} placeholder={videos[1].placeholder} aspectRatio="9/16" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25} className="break-inside-avoid mb-5">
            <blockquote style={{ padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.5rem', lineHeight: 1.4 }}>
                &ldquo;{pullQuotes[1].text}&rdquo;
              </p>
              <cite style={{ display: 'block', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-jost)', fontStyle: 'normal' }}>
                {pullQuotes[1].attribution}
              </cite>
            </blockquote>
          </ScrollReveal>
          {initialScreenshots.slice(3, 6).map((src, i) => (
            <ScrollReveal key={src} delay={0.35 + i * 0.05} className="break-inside-avoid mb-5">
              <ScreenshotCard src={src} rotation={rotations[i + 3]} />
            </ScrollReveal>
          ))}
        </div>

        {/* Expanded screenshots */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ columns: 3, columnGap: '1.5rem', marginTop: '0' }}
            >
              {extraScreenshots.map((src, i) => (
                <motion.div
                  key={src}
                  className="break-inside-avoid mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ScreenshotCard src={src} rotation={rotations[i + INITIAL_COUNT] ?? 0} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand / Collapse button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => setExpanded(v => !v)}
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.7rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              background: 'none',
              border: '1px solid var(--border-gold)',
              padding: '0.75rem 2rem',
              cursor: 'pointer',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-gold)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-gold)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-gold)'
            }}
          >
            {expanded ? 'Show less' : `See all ${screenshots.length} reviews`}
          </button>
        </div>
      </div>

      {/* Mobile: horizontal scroll carousel — all items */}
      <div className="md:hidden">
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            paddingBottom: '1rem',
            scrollbarWidth: 'none' as React.CSSProperties['scrollbarWidth'],
            msOverflowStyle: 'none' as React.CSSProperties['msOverflowStyle'],
          } as React.CSSProperties}
        >
          {videos.map(v => (
            <div key={v.id} style={{ flexShrink: 0, width: '80vw', scrollSnapAlign: 'start' }}>
              <VideoTile src={v.src} placeholder={v.placeholder} aspectRatio="9/16" />
            </div>
          ))}
          {pullQuotes.map(q => (
            <div key={q.id} style={{ flexShrink: 0, width: '80vw', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', padding: '1rem' }}>
              <blockquote>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.5rem', lineHeight: 1.4 }}>
                  &ldquo;{q.text}&rdquo;
                </p>
                <cite style={{ display: 'block', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-jost)', fontStyle: 'normal' }}>
                  {q.attribution}
                </cite>
              </blockquote>
            </div>
          ))}
          {screenshots.map((src) => (
            <div key={src} style={{ flexShrink: 0, width: '70vw', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Client review" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.65rem', fontFamily: 'var(--font-jost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1rem' }}>
          Swipe to see more →
        </p>
      </div>
    </section>
  )
}
