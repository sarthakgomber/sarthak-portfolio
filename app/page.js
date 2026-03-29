import StarField from '@/components/StarField'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: '#060608' }}>
      <StarField />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </div>
    </main>
  )
}