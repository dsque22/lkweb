import type { Metadata } from 'next'
import { Fraunces, Jost } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Dr. Lyda Kermani: Nervous System Regulation',
  description:
    "Nervous system regulation for high-functioning people who look fine and aren't. Book your first session with Dr. Lyda Kermani.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
