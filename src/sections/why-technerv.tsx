import { motion } from 'framer-motion'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { Zap, Shield, Smartphone, TrendingUp, Sparkles, Clock, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import CountUp from 'react-countup'

interface Strength {
  icon: LucideIcon
  title: string
  description: string
  metric?: {
    value: number
    suffix: string
    label: string
  }
  gradient: string
}

const strengths: Strength[] = [
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description: 'Every project leverages the latest, battle-tested frameworks and tools for future-proof solutions that scale.',
    metric: { value: 30, suffix: '+', label: 'Cutting-edge technologies' },
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'Blazing-fast load times, optimized bundles, code splitting, and efficient rendering across all devices.',
    metric: { value: 95, suffix: '+', label: 'Lighthouse Performance score' },
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect layouts that deliver exceptional experiences from mobile phones to ultra-wide monitors.',
    metric: { value: 100, suffix: '%', label: 'Device compatibility' },
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Secure Development',
    description: 'Security-first approach with OWASP guidelines, regular audits, encryption, and compliance standards.',
    metric: { value: 0, suffix: '', label: 'Security incidents' },
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Technical SEO best practices, semantic markup, structured data, and Core Web Vitals excellence.',
    metric: { value: 100, suffix: '%', label: 'SEO score target' },
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Clock,
    title: 'Long-Term Support',
    description: 'Your success matters. We offer continuous improvements, monitoring, and strategic guidance post-launch.',
    metric: { value: 24, suffix: '/7', label: 'Ongoing availability' },
    gradient: 'from-cyan-500 to-sky-500',
  },
]

export function WhyTechnerv() {
  return (
    <section id="why" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07]"
             style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      </div>

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <FadeIn className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              Why TECHNERV
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Built for <span className="text-gradient">excellence</span> at every level
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8">
              We don't just build software — we craft digital experiences that drive measurable business results.
              Every decision we make is informed by your success metrics.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              Discuss your project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>

          <Stagger staggerChildren={0.07} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map((strength) => {
              const Icon = strength.icon
              return (
                <motion.div
                  key={strength.title}
                  variants={fadeItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${strength.gradient} opacity-30`} />
                  </div>
                  <div className="relative h-full rounded-2xl bg-[var(--card)] border border-[var(--border)] p-7 transition-all duration-500 group-hover:border-transparent overflow-hidden">
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${strength.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" />
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${strength.gradient} opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500`} />
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight mb-3">
                      {strength.title}
                    </h3>

                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-5">
                      {strength.description}
                    </p>

                    {strength.metric && (
                      <div className="pt-5 border-t border-[var(--border)]">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-display text-3xl font-bold text-gradient">
                            {strength.metric.value !== 0 ? (
                              <CountUp end={strength.metric.value} duration={2} />
                            ) : (
                              strength.metric.value
                            )}
                          </span>
                          <span className="font-display text-2xl font-bold text-gradient">
                            {strength.metric.suffix}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-[var(--muted-foreground)]">
                          {strength.metric.label}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
