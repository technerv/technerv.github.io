import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FadeIn, Stagger, fadeItem } from '@/components/ui/reveal'
import { ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  title: string
  category: string
  description: string
  technologies: string[]
  challenges: string
  outcome: string
  image: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  gradient: string
  glow: string
}

const projects: Project[] = [
  {
    title: 'Nexus Analytics Platform',
    category: 'SaaS Dashboard',
    description: 'A comprehensive business analytics platform with real-time data visualization and AI-powered insights for enterprise clients.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js', 'AWS'],
    challenges: 'Processing millions of data points with sub-second response times while maintaining a smooth, responsive interface across devices.',
    outcome: 'Reduced data processing time by 73% and enabled client reporting workflows by 4x improvement in data-informed decision making.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20analytics%20dashboard%20with%20dark%20theme%20data%20visualization%20charts%20graphs%20minimalist%20design&image_size=landscape_16_9',
    liveUrl: '#',
    caseStudyUrl: '#',
    gradient: 'from-indigo-500 to-purple-500',
    glow: '#6366f1',
  },
  {
    title: 'Verve E-commerce',
    category: 'E-commerce Platform',
    description: 'A luxury fashion e-commerce experience with immersive product showcases, AI recommendations, and seamless checkout.',
    technologies: ['Shopify', 'Hydrogen', 'TypeScript', 'Tailwind', 'Stripe'],
    challenges: 'Integrating immersive 3D product previews, personalized recommendations, and lightning-fast page loads globally.',
    outcome: '47% increase in conversion rates, 60% faster average order value boosted by personalized AI product recommendations.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20fashion%20ecommerce%20website%20elegant%20dark%20theme%20product%20showcase&image_size=landscape_16_9',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-pink-500 to-rose-500',
    glow: '#ec4899',
  },
  {
    title: 'AI Content Studio',
    category: 'AI Application',
    description: 'An AI-powered content creation platform with multi-modal generation for marketing teams and content creators.',
    technologies: ['React', 'Node.js', 'Python', 'FastAPI', 'OpenAI', 'Vercel'],
    challenges: 'Building reliable streaming responses with consistent output quality and cost-efficient API usage at scale.',
    outcome: 'Content teams report 5x faster content creation with output and 92% user satisfaction rate.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20content%20creator%20platform%20interface%20modern%20design%20creative%20tools%20purple%20gradient&image_size=landscape_16_9',
    liveUrl: '#',
    caseStudyUrl: '#',
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: '#8b5cf6',
  },
  {
    title: 'HealthTrack Pro',
    category: 'Healthcare Web App',
    description: 'Patient management and telemedicine platform connecting healthcare providers with patients securely.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'WebRTC', 'HIPAA'],
    challenges: 'Ensuring HIPAA compliance, end-to-end encryption, secure video consultations, and reliable appointment scheduling.',
    outcome: 'Serves 50+ clinics with 99.9% platform uptime and 35% reduction in administrative overhead.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=healthcare%20patient%20management%20dashboard%20clean%20medical%20interface%20teal%20green%20design&image_size=landscape_16_9',
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-emerald-500 to-teal-500',
    glow: '#10b981',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
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

        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ transform: 'translateZ(30px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/20 to-transparent" />

          <div className="absolute top-4 left-4 flex gap-2" style={{ transform: 'translateZ(40px)' }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full glass text-xs font-semibold">
              {project.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ transform: 'translateZ(40px)' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="p-7 md:p-8" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
            <ArrowUpRight size={22} className="shrink-0 mt-1 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>

          <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-5 mb-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                Challenge
              </h4>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                Outcome
              </h4>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--muted)] text-[var(--muted-foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--border)] hover:border-indigo-500/50 text-sm font-semibold hover:bg-indigo-500/5 transition-all duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all duration-300"
              >
                <FileText size={14} />
                Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-page relative">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Selected projects that <span className="text-gradient">deliver impact</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            A curated selection of work across industries and platforms. Each project represents
            a unique challenge solved with technical excellence and thoughtful design.
          </p>
        </FadeIn>

        <Stagger staggerChildren={0.12} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
