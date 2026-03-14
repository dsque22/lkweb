'use client'

import { ScrollReveal } from './ScrollReveal'

const ACUITY_URL = 'https://bookwithlydakermani.as.me/discoverysession'
const STRIPE_URL = '#'   // PLACEHOLDER

const offers = [
  {
    name: 'The First Session',
    price: '$175',
    description: "For new patients ready to experience the work. In one complete 1:1 session, Lyda maps what's at the root of what you're carrying, gives you a direct experience of the ART Method, and creates a personalized path forward.",
    note: 'If you want to continue, the next step is Regulate & Rise, a 4-week program designed to go deeper. Most patients who experience this session choose to.',
    cta: 'Book Your Session',
    href: ACUITY_URL,
    primary: true,
    includes: undefined as string[] | undefined,
    enrollNote: undefined as string | undefined,
  },
  {
    name: 'Regulate & Rise',
    price: '$1,111',
    description: '4 weeks. 4 sessions. One specific pattern, problem, or theme. Addressed at every layer: nervous system, energy body, mind, and emotions.',
    note: undefined as string | undefined,
    includes: ['4 weekly 1:1 sessions', 'Chinese herbal prescription', 'Personalized homework + integration exercises', 'Check-in follow-up'],
    cta: undefined as string | undefined,
    href: undefined as string | undefined,
    primary: false,
    enrollNote: 'Available after your First Session. If this is the right next step, Lyda will walk you into it personally.',
  },
]

export function WorkWithMe() {
  return (
    <section
      id="work-with-me"
      style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark)', padding: 'clamp(5rem, 12vw, 10rem) 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="content-container">
        <ScrollReveal className="mb-12 md:mb-16">
          <p style={{ color: 'var(--text-muted-on-dark)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1rem' }}>
            Work With Me
          </p>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 600,
            color: 'var(--text-on-dark)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            lineHeight: 1.05,
          }}>The work is here.<br />You just have to begin.</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.name} delay={i * 0.15} direction="up">
              <div
                style={{
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  border: '1px solid var(--border-gold)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(250,252,232,0.02)',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--accent-gold)'
                  el.style.background = 'rgba(184,144,64,0.05)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--border-gold)'
                  el.style.background = 'rgba(250,252,232,0.02)'
                }}
              >
                <p style={{ color: 'var(--text-muted-on-dark)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-jost)', marginBottom: '1rem' }}>
                  {offer.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 600,
                  color: 'var(--accent-gold)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  lineHeight: 1,
                  marginBottom: '1.5rem',
                }}>
                  {offer.price}
                </p>
                <p style={{
                  fontFamily: 'var(--font-jost)',
                  color: 'var(--text-on-dark)',
                  opacity: 0.8,
                  lineHeight: 1.75,
                  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                  marginBottom: '1rem',
                  flex: 1,
                }}>
                  {offer.description}
                </p>
                {offer.note && (
                  <p style={{
                    fontFamily: 'var(--font-jost)',
                    fontStyle: 'italic',
                    color: 'var(--text-muted-on-dark)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}>
                    {offer.note}
                  </p>
                )}
                {offer.includes && (
                  <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {offer.includes.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', fontFamily: 'var(--font-jost)', color: 'var(--text-on-dark)', opacity: 0.72, lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--accent-gold)', marginTop: '0.1em', flexShrink: 0 }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {offer.cta && offer.href ? (
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {offer.cta}
                  </a>
                ) : offer.enrollNote ? (
                  <p style={{
                    fontFamily: 'var(--font-jost)',
                    fontStyle: 'italic',
                    color: 'var(--accent-gold)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(168,156,53,0.25)',
                  }}>
                    {offer.enrollNote}
                  </p>
                ) : null}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35} className="mt-6">
          <p style={{ color: 'var(--text-muted-on-dark)', fontSize: '0.75rem', fontFamily: 'var(--font-jost)', fontStyle: 'italic' }}>
            A payment plan is available for Regulate &amp; Rise. Reach out to discuss.
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
