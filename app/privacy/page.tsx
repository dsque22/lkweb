import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Dr. Lyda Kermani',
  description: 'Privacy policy for drlydakermani.com',
}

export default function PrivacyPage() {
  return (
    <main>
      <Nav />

      <section
        style={{
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          padding: 'clamp(6rem, 14vw, 10rem) 0 clamp(5rem, 10vw, 8rem)',
          minHeight: '80vh',
        }}
      >
        <div
          className="content-container"
          style={{ maxWidth: '720px' }}
        >
          {/* Back link */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-muted)',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-jost)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              textDecoration: 'none',
              marginBottom: '3rem',
              transition: 'color 0.2s ease',
            }}
          >
            ← Back
          </Link>

          {/* Header */}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontFamily: 'var(--font-jost)',
              marginBottom: '1rem',
            }}
          >
            Last updated: March 2026
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.05,
              marginBottom: '3rem',
            }}
          >
            Privacy Policy
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              lineHeight: 1.85,
              color: 'var(--text-primary)',
            }}
          >
            <Section title="Who we are">
              <p>
                This website is operated by Dr. Lyda Kermani, DACM, a licensed healthcare
                practitioner offering acupuncture, Reiki, and EFT coaching services. You can
                reach us at{' '}
                <a
                  href="mailto:info@lydakermani.com"
                  style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}
                >
                  info@lydakermani.com
                </a>
                .
              </p>
            </Section>

            <Section title="Information we collect">
              <p>
                We collect only what is necessary to provide our services and communicate
                with you:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Booking information</strong> — name, email address, and any intake
                  details you provide when scheduling a session through Acuity Scheduling.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Newsletter subscription</strong> — your email address when you
                  subscribe via Substack.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Payment information</strong> — processed securely through Stripe.
                  We do not store your payment details.
                </li>
                <li>
                  <strong>Usage data</strong> — basic analytics such as pages visited and
                  time on site, collected in aggregate and without personal identifiers.
                </li>
              </ul>
            </Section>

            <Section title="How we use your information">
              <p>We use your information solely to:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Confirm and manage your session bookings</li>
                <li style={{ marginBottom: '0.5rem' }}>Send you the newsletter you opted into</li>
                <li style={{ marginBottom: '0.5rem' }}>Process your payment securely</li>
                <li>Respond to your questions and inquiries</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                We do not sell, rent, or share your personal information with third parties
                for marketing purposes.
              </p>
            </Section>

            <Section title="Third-party services">
              <p>
                This site uses the following third-party services, each governed by their own
                privacy policies:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Acuity Scheduling</strong> — appointment booking
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Stripe</strong> — payment processing
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Substack</strong> — newsletter delivery
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting
                </li>
              </ul>
            </Section>

            <Section title="Cookies">
              <p>
                This website uses a single cookie to remember your light/dark display
                preference. No tracking cookies or advertising cookies are used.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You may request to access, correct, or delete any personal information we
                hold about you at any time. To exercise these rights, email{' '}
                <a
                  href="mailto:info@lydakermani.com"
                  style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}
                >
                  info@lydakermani.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this policy from time to time. When we do, we will revise the
                date at the top of this page. Continued use of the site after changes
                constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy? Reach us at{' '}
                <a
                  href="mailto:info@lydakermani.com"
                  style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}
                >
                  info@lydakermani.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontWeight: 600,
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          lineHeight: 1.2,
          marginBottom: '0.85rem',
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}
