'use client'

import Image from 'next/image'

const INSTAGRAM_URL = '#'   // PLACEHOLDER
const SUBSTACK_URL = 'https://substack.com/@drlydakermani'
const ACUITY_URL = 'https://bookwithlydakermani.as.me/discoverysession'

const links = [
  { label: 'Instagram', href: INSTAGRAM_URL },
  { label: 'Substack', href: SUBSTACK_URL },
  { label: 'Book a Session', href: ACUITY_URL },
  { label: 'Privacy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer
      style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark)', padding: 'clamp(3rem, 8vw, 5rem) 0' }}
    >
      <div className="content-container text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Symbol */}
        <div className="flex justify-center mb-5">
          <Image
            src="/symbol-clean.png"
            alt=""
            width={42}
            height={34}
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }}
          />
        </div>

        {/* Wordmark */}
        <div className="flex justify-center mb-2">
          <Image
            src="/logo-wordmark.png"
            alt="Lyda Kermani"
            width={160}
            height={20}
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
          />
        </div>

        <p style={{
          color: 'var(--text-muted-on-dark)',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          fontFamily: 'var(--font-jost)',
          marginBottom: '2.5rem',
        }}>
          Doctor of Acupuncture in Chinese Medicine · Reiki Master · EFT Certified Coach
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                color: 'var(--text-muted-on-dark)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontFamily: 'var(--font-jost)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-on-dark)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted-on-dark)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', background: 'var(--border-gold)', margin: '0 auto 1.5rem' }} />

        <p style={{ color: 'var(--text-muted-on-dark)', fontSize: '0.65rem', fontFamily: 'var(--font-jost)', opacity: 0.5 }}>
          © 2026 Dr. Lyda Kermani. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
