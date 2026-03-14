import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Mirror } from '@/components/Mirror'
import { About } from '@/components/About'
import { ArtMethod } from '@/components/ArtMethod'
import { Transformation } from '@/components/Transformation'
import { Remote } from '@/components/Remote'
import { WorkWithMe } from '@/components/WorkWithMe'
import { TestimonialsWall } from '@/components/TestimonialsWall'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mirror />
      <About />
      <ArtMethod />
      <Transformation />
      <Remote />
      <WorkWithMe />
      <TestimonialsWall />
      <Newsletter />
      <Footer />
    </main>
  )
}
