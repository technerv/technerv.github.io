import { motion } from 'framer-motion'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import type { LucideIcon } from 'lucide-react'
import {
  Layout, Database, Server, CloudCog, Terminal, Wrench,
  Layers, Globe2, Cpu, Boxes, Box,
} from 'lucide-react'

interface Tech {
  name: string
  level: number
}

interface Category {
  title: string
  icon: LucideIcon
  gradient: string
  items: Tech[]
}

const categories: Category[] = [
  {
    title: 'Frontend',
    icon: Layout,
    gradient: 'from-indigo-500 to-blue-500',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Vue.js', level: 80 },
      { name: 'Three.js', level: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'Express', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'GraphQL', level: 84 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    gradient: 'from-cyan-500 to-teal-500',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 86 },
      { name: 'Redis', level: 82 },
      { name: 'MySQL', level: 84 },
      { name: 'Supabase', level: 80 },
      { name: 'Prisma', level: 88 },
    ],
  },
  {
    title: 'CMS',
    icon: Layers,
    gradient: 'from-emerald-500 to-green-500',
    items: [
      { name: 'WordPress', level: 94 },
      { name: 'Shopify', level: 88 },
      { name: 'Sanity', level: 82 },
      { name: 'Strapi', level: 80 },
      { name: 'Contentful', level: 78 },
      { name: 'Headless WP', level: 86 },
    ],
  },
  {
    title: 'Cloud',
    icon: CloudCog,
    gradient: 'from-sky-500 to-blue-500',
    items: [
      { name: 'AWS', level: 86 },
      { name: 'Vercel', level: 92 },
      { name: 'GCP', level: 78 },
      { name: 'Azure', level: 75 },
      { name: 'Cloudflare', level: 88 },
      { name: 'Netlify', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    icon: Terminal,
    gradient: 'from-violet-500 to-fuchsia-500',
    items: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 75 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'CI/CD', level: 86 },
      { name: 'Terraform', level: 72 },
      { name: 'Nginx', level: 84 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
    items: [
      { name: 'Git', level: 95 },
      { name: 'Figma', level: 86 },
      { name: 'VS Code', level: 96 },
      { name: 'Postman', level: 88 },
      { name: 'Jira', level: 82 },
      { name: 'Storybook', level: 78 },
    ],
  },
  {
    title: 'Integrations',
    icon: Boxes,
    gradient: 'from-rose-500 to-pink-500',
    items: [
      { name: 'Stripe', level: 90 },
      { name: 'OpenAI API', level: 88 },
      { name: 'OAuth 2.0', level: 86 },
      { name: 'SendGrid', level: 84 },
      { name: 'Twilio', level: 80 },
      { name: 'Slack API', level: 82 },
    ],
  },
]

function TechBadge({ name, delay, index }: { name: string; delay: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.4, delay: delay + index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group relative"
    >
      <div className="relative px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-sm font-medium hover:border-indigo-500/40 transition-all duration-300 cursor-default overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative">{name}</span>
      </div>
    </motion.div>
  )
}

export function TechnologyStack() {
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.06]"
             style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
      </div>

      <div className="container-page relative">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Technology Stack
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Modern tools for <span className="text-gradient">modern products</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            A carefully curated stack of battle-tested technologies and cutting-edge tools
            that ensure every product is performant, scalable, and maintainable.
          </p>
        </FadeIn>

        <Stagger staggerChildren={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={fadeItem}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-40`} />
                </div>
                <div className="relative h-full rounded-3xl bg-[var(--card)] border border-[var(--border)] p-6 transition-all duration-500 group-hover:border-transparent overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700"
                       style={{ background: `var(--tw-gradient-stops)` }} />

                  <div className="flex items-center gap-3 mb-6">
                    <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={20} className="text-white" />
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500`} />
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <TechBadge key={item.name} name={item.name} delay={0} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
