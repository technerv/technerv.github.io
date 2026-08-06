import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FadeIn } from '@/components/ui/reveal'
import { Quote, ChevronLeft, ChevronRight, Star, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  project: string
}

const testimonials: Testimonial[] = [
  {
    quote: "TECHNERV transformed our outdated website into a modern, high-converting platform. Their attention to detail and technical expertise is unmatched. We saw a 240% increase in lead generation within the first month.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Nova Enterprises",
    rating: 5,
    project: "Website Redesign & SEO",
  },
  {
    quote: "Working with TECHNERV on our custom CRM was an absolute game-changer. They understood our complex workflows immediately and delivered a solution that saved our team 15+ hours per week on manual processes.",
    author: "David Chen",
    role: "Operations Manager",
    company: "Global Logistics Co.",
    rating: 5,
    project: "Custom Business Application",
  },
  {
    quote: "The AI-powered content platform they built for us has completely revolutionized our content creation pipeline. Quality is consistently high, and the ROI was apparent within weeks of launch.",
    author: "Jessica Rodriguez",
    role: "Content Lead",
    company: "MediaScale Inc.",
    rating: 5,
    project: "AI Content Generation Platform",
  },
  {
    quote: "From concept to deployment, TECHNERV delivered flawlessly. Their cloud architecture expertise helped us scale from 1K to 50K concurrent users without breaking a sweat. True professionals.",
    author: "Michael Thompson",
    role: "CTO",
    company: "FinTech Start",
    rating: 5,
    project: "Cloud Infrastructure & Scaling",
  },
  {
    quote: "Our e-commerce sales tripled after the TECHNERV team redesigned our store. The checkout flow optimization alone added 35% to our conversion rate. Highly recommended for any serious online business.",
    author: "Emma Williams",
    role: "Founder & CEO",
    company: "Verve Fashion",
    rating: 5,
    project: "Shopify E-commerce Build",
  },
  {
    quote: "Reliable, responsive, and ridiculously good at what they do. The WordPress multisite they built for our 12-location company runs incredibly smoothly. Ongoing support is top-notch too.",
    author: "Robert Jackson",
    role: "Franchise Director",
    company: "Healthcare Plus",
    rating: 5,
    project: "WordPress Multisite Network",
  },
]

export function Testimonials() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
      },
    },
    [autoplayRef.current]
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06]"
             style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />
      </div>

      <div className="container-page relative">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Trusted by teams that <span className="text-gradient">demand results</span>
            </h2>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </FadeIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5 md:-ml-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-5 md:pl-6 min-h-[420px]"
              >
                <div className="h-full gradient-border p-px">
                  <div className="h-full rounded-3xl bg-[var(--card)] p-7 md:p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
                        <Quote size={22} className="text-indigo-400" />
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                          <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-medium mb-5 w-fit">
                      {testimonial.project}
                    </div>

                    <blockquote className="flex-1 text-[var(--foreground)] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 pt-5 border-t border-[var(--border)]">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-display font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-[var(--muted-foreground)]">
                          {testimonial.role} · {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5.0/5', label: 'Average Rating' },
              { value: '99%', label: 'Retention Rate' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5 md:p-6 text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-[var(--muted-foreground)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
