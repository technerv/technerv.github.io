import { motion } from 'framer-motion'
import {
  Globe, ShoppingCart, AppWindow, BrainCog, Plug2, Cloud, ShieldCheck, ArrowUpRight
} from 'lucide-react'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { forwardRef, SVGProps, ComponentType } from 'react'

const WordpressIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
))
WordpressIcon.displayName = 'WordpressIcon'

type ServiceIcon = ComponentType<{ className?: string; size?: number | string; color?: string }>

interface Service {
  icon: ServiceIcon
  title: string
  description: string
  benefits: string[]
  gradient: string
  accent: string
  glow: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Modern Website Design',
    description: 'Stunning, high-performance websites crafted with cutting-edge design principles and seamless user experiences.',
    benefits: ['Responsive design', 'SEO optimized', 'Lightning fast', 'Conversion focused'],
    gradient: 'from-indigo-500 to-blue-500',
    accent: 'indigo',
    glow: '#6366f1',
  },
  {
    icon: WordpressIcon as ServiceIcon,
    title: 'WordPress Development',
    description: 'Custom WordPress solutions with bespoke themes, plugins, and enterprise-grade performance optimization.',
    benefits: ['Custom themes', 'Plugin development', 'Headless CMS', 'Performance tuning'],
    gradient: 'from-purple-500 to-pink-500',
    accent: 'purple',
    glow: '#8b5cf6',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores powered by Shopify, WooCommerce, and custom platforms with seamless checkout experiences.',
    benefits: ['Shopify/WooCommerce', 'Payment integration', 'Inventory management', 'Analytics dashboard'],
    gradient: 'from-pink-500 to-rose-500',
    accent: 'pink',
    glow: '#ec4899',
  },
  {
    icon: AppWindow,
    title: 'Custom Business Applications',
    description: 'Tailored web applications designed to automate workflows, boost productivity, and scale with your business.',
    benefits: ['Full-stack apps', 'Dashboard & analytics', 'Role-based access', 'API-first architecture'],
    gradient: 'from-cyan-500 to-teal-500',
    accent: 'cyan',
    glow: '#06b6d4',
  },
  {
    icon: BrainCog,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI solutions that transform operations and unlock unprecedented business potential.',
    benefits: ['LLM integration', 'Process automation', 'Data pipelines', 'Chatbots & assistants'],
    gradient: 'from-violet-500 to-fuchsia-500',
    accent: 'violet',
    glow: '#8b5cf6',
  },
  {
    icon: Plug2,
    title: 'API Integrations',
    description: 'Seamless connections between your systems, services, and third-party platforms for unified workflows.',
    benefits: ['REST/GraphQL APIs', 'Webhooks', 'Third-party sync', 'Data migration'],
    gradient: 'from-amber-500 to-orange-500',
    accent: 'amber',
    glow: '#f59e0b',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Robust, scalable cloud infrastructure on AWS, GCP, Azure, and Vercel with DevOps best practices.',
    benefits: ['AWS/GCP/Azure', 'CI/CD pipelines', 'Auto-scaling', 'Monitoring & alerts'],
    gradient: 'from-sky-500 to-blue-500',
    accent: 'sky',
    glow: '#0ea5e9',
  },
  {
    icon: ShieldCheck,
    title: 'Website Maintenance & Security',
    description: 'Proactive maintenance, security hardening, backups, and updates to keep your digital assets protected.',
    benefits: ['Security audits', 'Regular updates', 'Backup strategy', 'Uptime monitoring'],
    gradient: 'from-emerald-500 to-green-500',
    accent: 'emerald',
    glow: '#10b981',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />

      <div className="container-page relative">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Premium digital <span className="text-gradient">solutions</span> for ambitious businesses
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            End-to-end digital product development from concept to launch and beyond.
            Every solution is crafted with technical excellence and meticulous attention to detail.
          </p>
        </FadeIn>

        <Stagger staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-3xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(135deg, ${service.glow}80, transparent, transparent)` }}
                />
                <div className="relative h-full rounded-3xl bg-[var(--card)] border border-[var(--border)] p-7 transition-all duration-500 group-hover:border-transparent overflow-hidden">
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700"
                    style={{ background: service.glow }}
                  />

                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500`} />
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 tracking-tight flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight size={18} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[var(--muted-foreground)]" />
                  </h3>

                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300"
                    >
                      {benefit}
                    </span>
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
