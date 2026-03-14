'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ModeToggle } from './ModeToggle'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'About', href: '#about' },
  { label: 'The Method', href: '#method' },
  { label: 'Work With Me', href: '#work-with-me' },
  { label: 'Testimonials', href: '#testimonials' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme } = useTheme()

  // Transparent-bg PNGs: pure CSS filter for color mapping.
  // Dark mode: black → white/ivory. Light mode: black → dark navy.
  const logoFilter =
    theme === 'dark'
      ? 'brightness(0) invert(1)'       // black → white
      : 'brightness(0)'                  // black → black (readable on ivory bg)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: '64px',
          background: scrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Desktop nav: logo left, links right */}
        <div className="hidden md:flex content-container h-full items-center justify-between">
          <a href="#" className="flex items-center gap-3 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/symbol-clean.png" alt="" width={36} height={29} style={{ filter: logoFilter, display: 'block' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wordmark.png" alt="Lyda Kermani" width={140} height={18} style={{ filter: logoFilter, display: 'block' }} />
          </a>
          <div className="flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href + link.label}
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-jost)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.13em',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
            <ModeToggle />
          </div>
        </div>

        {/* Mobile nav: hamburger left, logo centered, space right */}
        <div className="md:hidden content-container h-full flex items-center">
          <button
            className="flex flex-col justify-center gap-1.5 p-2 -ml-2 shrink-0"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px" style={{ background: 'var(--text-primary)' }} />
            <span className="block w-6 h-px" style={{ background: 'var(--text-primary)' }} />
            <span className="block w-4 h-px" style={{ background: 'var(--text-primary)' }} />
          </button>
          <a href="#" className="flex-1 flex items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/symbol-clean.png" alt="" width={28} height={22} style={{ filter: logoFilter, display: 'block' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wordmark.png" alt="Lyda Kermani" width={110} height={14} style={{ filter: logoFilter, display: 'block' }} />
          </a>
          {/* Spacer to balance hamburger */}
          <div className="w-10 shrink-0" />
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
            style={{ background: 'var(--bg-dark)' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Symbol watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/symbol-clean.png"
                alt=""
                width={300}
                height={240}
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.06 }}
              />
            </div>

            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ color: 'var(--text-on-dark)', fontSize: '1.25rem' }}
            >
              ✕
            </button>

            {links.map((link, i) => (
              <motion.a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: 'var(--text-on-dark)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-on-dark)')}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <ModeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
