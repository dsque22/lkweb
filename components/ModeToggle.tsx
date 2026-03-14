'use client'

import { useTheme } from '@/lib/theme'

export function ModeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark/light mode"
      style={{
        color: 'var(--text-muted)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-jost)',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
    >
      {theme === 'dark' ? '☀ Light' : '☾ Dark'}
    </button>
  )
}
