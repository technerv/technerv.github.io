import { motion } from 'framer-motion'
import { ArrowRight, MousePointer2, Sparkles, Code2, Cloud, Brain, Zap, Globe } from 'lucide-react'
import { Suspense, lazy } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { TextReveal, FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { LinkButton } from '@/components/ui/button'
import CountUp from 'react-countup'

const Scene3D = lazy(() => import('@/components/three/scene-3d').then(m => ({ default: m.Scene3D })))

const floatingStats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

const techIcons = [
  { Icon: Code2, x: '10%', y: '25%', delay: 0.2, color: 'from-indigo-500 to-blue-500' },
  { Icon: Brain, x: '85%', y: '20%', delay: 0.4, color: 'from-purple-500 to-pink-500' },
  { Icon: Cloud, x: '15%', y: '70%', delay: 0.6, color: 'from-cyan-500 to-teal-500' },
  { Icon: Zap, x: '80%', y: '65%', delay: 0.8, color: 'from-amber-500 to-orange-500' },
  { Icon: Globe, x: '50%', y: '85%', delay: 1, color: 'from-emerald-500 to-green-500' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      <AuroraBackground />

      <div className="absolute inset-0 opacity-60">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] z-10 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none z-10">
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {techIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 hidden md:block"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            className={`relative p-3 rounded-2xl bg-gradient-to-br ${color} shadow-xl`}
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} blur-lg opacity-50`} />
            <Icon size={22} className="relative text-white" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-30 container-page text-center">
        <FadeIn delay={0.1} y={20}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-[var(--muted-foreground)]">
              Building intelligent digital products
            </span>
          </motion.div>
        </FadeIn>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto">
          <TextReveal as="span" delay={0.3}>
            Helping Businesses Build
          </TextReveal>
          <br />
          <TextReveal as="span" delay={0.6}>
            <span className="text-gradient">Intelligent Digital</span> Products
          </TextReveal>
        </h1>

        <FadeIn delay={1.1}>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-12 leading-relaxed">
            Designing modern websites, scalable web applications, AI-powered solutions,
            and cloud-ready platforms that help businesses innovate and grow.
          </p>
        </FadeIn>

        <Stagger delayChildren={1.3} staggerChildren={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <motion.div variants={fadeItem}>
            <LinkButton href="#contact" variant="gradient" size="xl" rightIcon={<ArrowRight size={18} />}>
              Start a Project
            </LinkButton>
          </motion.div>
          <motion.div variants={fadeItem}>
            <LinkButton href="#work" variant="outline" size="xl">
              Explore My Work
            </LinkButton>
          </motion.div>
        </Stagger>

        <Stagger delayChildren={1.5} staggerChildren={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeItem}
              className="glass rounded-2xl p-5 md:p-6 hover:border-indigo-500/30 transition-all duration-500 group"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                <CountUp end={stat.value} duration={2.5} delay={1.6 + i * 0.1} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-[var(--muted-foreground)] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-2 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
          />
        </div>
        <MousePointer2 size={14} className="text-[var(--muted-foreground)]" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent z-20" />
    </section>
  )
}
