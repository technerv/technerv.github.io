import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/lenis-provider'
import { StructuredData } from '@/components/seo/structured-data'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Hero } from '@/sections/hero'
import { BrandTrust } from '@/sections/brand-trust'
import { Services } from '@/sections/services'
import { FeaturedWork } from '@/sections/featured-work'
import { Process } from '@/sections/process'
import { TechnologyStack } from '@/sections/technology-stack'
import { WhyTechnerv } from '@/sections/why-technerv'
import { Testimonials } from '@/sections/testimonials'
import { Contact } from '@/sections/contact'

function AppContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <StructuredData />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
              <BrandTrust />
              <Services />
              <FeaturedWork />
              <Process />
              <TechnologyStack />
              <WhyTechnerv />
              <Testimonials />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="technerv-theme">
      <LenisProvider>
        <AppContent />
      </LenisProvider>
    </ThemeProvider>
  )
}
