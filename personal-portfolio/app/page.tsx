import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const DynamicBackground = dynamic(() => import('@/components/background'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicBackground />
      </Suspense>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

