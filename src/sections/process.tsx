import { motion } from 'framer-motion'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { Search, ClipboardList, Palette, Code, TestTube, Rocket, Headphones, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
  duration: string
  gradient: string
}

const steps: Step[] = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your business goals, target audience, competition, and technical requirements through comprehensive consultations.',
    duration: '1-2 weeks',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Planning',
    description: 'Detailed project roadmap, architecture design, technology selection, timeline, and transparent milestones.',
    duration: '1 week',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Design',
    description: 'Wireframes, visual design system, interactive prototypes, and pixel-perfect UI with iterative feedback.',
    duration: '2-4 weeks',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Code,
    number: '04',
    title: 'Development',
    description: 'Clean, scalable code architecture with modern technologies, regular demos, and progress updates.',
    duration: '4-12 weeks',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: TestTube,
    number: '05',
    title: 'Testing',
    description: 'Comprehensive QA, cross-browser testing, performance audits, accessibility checks, and bug fixes.',
    duration: '1-3 weeks',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Deployment',
    description: 'Production infrastructure setup, CI/CD pipelines, seamless launch, and performance monitoring.',
    duration: '1 week',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Headphones,
    number: '07',
    title: 'Ongoing Support',
    description: 'Post-launch support, feature enhancements, performance optimization, security updates, and strategic partnership.',
    duration: 'Continuous',
    gradient: 'from-cyan-500 to-sky-500',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
             style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      </div>

      <div className="container-page relative">
        <FadeIn className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            A proven process for <span className="text-gradient">flawless delivery</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            A transparent, collaborative workflow refined over years of successful projects.
            From discovery to deployment and beyond, you're involved at every step.
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:-translate-x-1/2 opacity-40" />

          <Stagger staggerChildren={0.08} className="space-y-12 md:space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  variants={fadeItem}
                  className={`relative flex items-start gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 md:px-12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="glass rounded-2xl p-6 md:p-7 hover:border-indigo-500/30 transition-all duration-500"
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${step.gradient} text-white`}>
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-3 tracking-tight flex items-center gap-3 md:gap-0">
                        <span className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} text-white font-bold text-sm`}>
                          {step.number}
                        </span>
                        <span>{step.title}</span>
                      </h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl z-10`}
                    >
                      <Icon size={26} className="text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-50`} />
                      <div className="absolute -inset-1 rounded-2xl border-2 border-[var(--background)] z-20" />
                    </motion.div>
                  </div>

                  <div className="md:hidden flex-shrink-0">
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg z-10`}>
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </Stagger>

          <FadeIn delay={0.8}>
            <div className="relative mt-24 gradient-border p-8 md:p-10 text-center">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-xl shadow-indigo-500/20">
                  <Check size={28} className="text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto">
                  Every great product starts with a conversation. Let's discuss your vision and how we can bring it to life.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Let's Build Something Great
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
