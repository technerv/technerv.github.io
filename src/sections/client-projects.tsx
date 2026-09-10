import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

interface ClientProject {
  title: string
  category: string
  description: string
  liveUrl?: string
  glow: string
}

const clientProjects: ClientProject[] = [
  {
    title: 'Precious Watersports',
    category: 'Tourism & Recreation',
    description: 'Offers a variety of water-based recreational activities, such as jet skiing and boat tours.',
    liveUrl: 'https://preciouswatersports.com/',
    glow: '#8b5cf6',
  },
  {
    title: 'Kimplanter Seedlings',
    category: 'Agriculture',
    description: 'Produces and supplies high-quality seedlings for various vegetables and fruits to farmers.',
    liveUrl: 'https://kimplanterseedlings.co.ke/',
    glow: '#ec4899',
  },
  {
    title: 'Vidah Ventures',
    category: 'Online Shopping & Marketplace in Uganda',
    description: 'Africa’s first community-powered commerce platform connecting small businesses with local influencers through performance-based affiliate marketing.',
    liveUrl: 'https://vidahventures.com/',
    glow: '#6366f1',
  },
  {
    title: 'ARN Care',
    category: 'Supported Living',
    description: 'Provides support for individuals with learning disabilities, autism, and mental health needs.',
    liveUrl: 'https://arncare.org/',
    glow: '#10b981',
  },
  {
    title: 'Prestigio Impex Ltd',
    category: 'Import/Export',
    description: 'Facilitates international trade by sourcing and supplying a variety of products to the global market.',
    liveUrl: 'https://prestigioimpexltd.com/',
    glow: '#10b981',
  },
  {
    title: 'Trusted Homecare NW',
    category: 'Domiciliary Care',
    description: 'Offers a range of support services to help people live comfortably and safely at home.',
    liveUrl: 'http://trustedhomecarenw.co.uk/',
    glow: '#8b5cf6',
  },
  {
    title: 'IO Healthcare',
    category: 'Healthcare Staffing',
    description: 'Supplies qualified healthcare professionals to various healthcare settings, bridging staffing gaps.',
    liveUrl: 'https://iohealthcare.org/',
    glow: '#ec4899',
  },
  {
    title: 'Better Living Care',
    category: 'Domiciliary Care',
    description: 'A provider of personal care, companionship, and support services to individuals in their own homes.',
    liveUrl: 'https://betterlivingcare.co.uk/',
    glow: '#6366f1',
  },
]

function ClientProjectCard({ project }: { project: ClientProject }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [0, 1], ['6deg', '-6deg'])
  const rotateY = useTransform(mouseXSpring, [0, 1], ['-6deg', '6deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width
    const yPct = mouseY / height
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:border-transparent">
        <div
          className="absolute inset-0 p-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
          style={{ background: `linear-gradient(135deg, ${project.glow}50, transparent 60%)` }}
        >
          <div className={`absolute inset-[1px] rounded-3xl bg-[var(--card)]`} />
        </div>

        <div className="p-7 md:p-8" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
            <ArrowUpRight size={22} className="shrink-0 mt-1 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full glass text-xs font-semibold mb-4">
            {project.category}
          </span>

          <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <ExternalLink size={14} />
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ClientProjects() {
  return (
    <section id="clients" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-page relative">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Client Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Showcasing our <span className="text-gradient">collaborations</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            A selection of websites we have designed and developed for our clients, each with its own unique identity and goals.
          </p>
        </FadeIn>

        <Stagger staggerChildren={0.12} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.title} project={project} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}