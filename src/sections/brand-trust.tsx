import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { motion } from 'framer-motion'

const brands = [
  'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Vercel',
  'Docker', 'PostgreSQL', 'MongoDB', 'WordPress', 'Shopify', 'Next.js',
]

export function BrandTrust() {
  return (
    <section id="trust" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-page">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Trusted Technologies
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built with industry-leading <span className="text-gradient">tools & platforms</span>
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden gap-4 py-4">
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <motion.div
                  key={`${brand}-${i}`}
                  variants={fadeItem}
                  className="flex-shrink-0 px-8 py-5 rounded-2xl glass flex items-center justify-center min-w-[140px] hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <span className="font-display font-semibold text-lg md:text-xl text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                    {brand}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <Stagger delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <motion.div variants={fadeItem} className="gradient-border p-8">
            <div className="relative z-10">
              <div className="text-5xl font-display font-bold text-gradient mb-3">100%</div>
              <h3 className="font-display text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Every project delivered with exceptional quality, attention to detail, and unwavering commitment to success.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeItem} className="gradient-border p-8">
            <div className="relative z-10">
              <div className="text-5xl font-display font-bold text-gradient-alt mb-3">24/7</div>
              <h3 className="font-display text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Long-term partnership with continuous monitoring, maintenance, and improvements for your digital products.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeItem} className="gradient-border p-8">
            <div className="relative z-10">
              <div className="text-5xl font-display font-bold text-gradient mb-3">95+</div>
              <h3 className="font-display text-xl font-semibold mb-2">Lighthouse Score</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Every website built with performance, accessibility, SEO, and best practices at the core.
              </p>
            </div>
          </motion.div>
        </Stagger>
      </div>
    </section>
  )
}
