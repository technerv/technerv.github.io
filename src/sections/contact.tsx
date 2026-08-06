import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import {
  Mail, MessageCircleCode, Github, Linkedin, MapPin,
  Send, CheckCircle2, ArrowRight, Briefcase, DollarSign, MessageSquare
} from 'lucide-react'
import { cn } from '@/lib/utils'

type FormValues = {
  name: string
  email: string
  company?: string
  budget?: string
  type: string
  message: string
}

const projectTypes = [
  { value: 'website', label: 'Website Design', icon: Briefcase },
  { value: 'webapp', label: 'Web Application', icon: Briefcase },
  { value: 'ecommerce', label: 'E-commerce', icon: Briefcase },
  { value: 'ai', label: 'AI / Automation', icon: Briefcase },
  { value: 'wordpress', label: 'WordPress', icon: Briefcase },
  { value: 'other', label: 'Other', icon: MessageSquare },
]

const budgetOptions = [
  { value: '<5k', label: '< $5K' },
  { value: '5-15k', label: '$5K - $15K' },
  { value: '15-50k', label: '$15K - $50K' },
  { value: '50k+', label: '$50K+' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      type: '',
    },
    mode: 'onTouched',
  })

  const selectedType = watch('type')
  const selectedBudget = watch('budget')

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      reset()
    }, 5000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[150px] opacity-[0.08]"
             style={{ background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)' }} />
      </div>

      <div className="container-page relative">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Have a project in mind? Tell me about it and I'll get back to you within 24 hours
            with a detailed proposal and timeline.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <FadeIn className="lg:col-span-5 space-y-6">
            <div className="gradient-border p-px">
              <div className="rounded-3xl bg-[var(--card)] p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <a href="mailto:hello@technerv.com" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--muted)] transition-all duration-300 -mx-2">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                        Email
                      </div>
                      <div className="font-medium truncate group-hover:text-indigo-400 transition-colors">
                        hello@technerv.com
                      </div>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-[var(--muted-foreground)] group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 opacity-0 group-hover:opacity-100" />
                  </a>

                  <a href="#" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--muted)] transition-all duration-300 -mx-2">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircleCode size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                        WhatsApp
                      </div>
                      <div className="font-medium truncate group-hover:text-green-400 transition-colors">
                        Chat directly
                      </div>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-[var(--muted-foreground)] group-hover:text-green-400 group-hover:translate-x-1 transition-all shrink-0 opacity-0 group-hover:opacity-100" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl -mx-2">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                        Location
                      </div>
                      <div className="font-medium">
                        Remote · Worldwide
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--border)]">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--muted-foreground)]">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-3">
                    <a href="#" aria-label="GitHub" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-300">
                      <Github size={18} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-300">
                      <Linkedin size={18} />
                    </a>
                    <a href="mailto:hello@technerv.com" aria-label="Email" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-300">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--card)] animate-pulse" />
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Currently accepting new projects</h4>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Available for Q4 2026 projects. Book a free consultation today to discuss your vision.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="gradient-border p-px">
              <div className="rounded-3xl bg-[var(--card)] p-7 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="min-h-[400px] flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30 mb-6">
                        <CheckCircle2 size={40} className="text-white" />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-500 blur-2xl opacity-40"
                        />
                      </div>
                      <h3 className="font-display text-3xl font-bold tracking-tight mb-3">
                        Message sent!
                      </h3>
                      <p className="text-lg text-[var(--muted-foreground)] max-w-md mb-8">
                        Thanks for reaching out. I'll get back to you within 24 hours with a detailed response.
                      </p>
                      <Button variant="gradient" size="lg" onClick={() => { setSubmitted(false); reset() }}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register('name', {
                              required: 'Name is required',
                              minLength: { value: 2, message: 'Name is required' },
                              maxLength: { value: 100, message: 'Name is too long' },
                            })}
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className={cn(
                              'w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border transition-all duration-300 text-sm',
                              'focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
                              errors.name ? 'border-red-500/50' : 'border-[var(--border)] focus:border-indigo-500/50'
                            )}
                          />
                          {errors.name && <p className="text-xs text-red-500">{typeof errors.name.message === 'string' ? errors.name.message : 'Invalid input'}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register('email', {
                              required: 'Valid email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Valid email is required',
                              },
                            })}
                            type="email"
                            id="email"
                            placeholder="john@company.com"
                            className={cn(
                              'w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border transition-all duration-300 text-sm',
                              'focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
                              errors.email ? 'border-red-500/50' : 'border-[var(--border)] focus:border-indigo-500/50'
                            )}
                          />
                          {errors.email && <p className="text-xs text-red-500">{typeof errors.email.message === 'string' ? errors.email.message : 'Invalid input'}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium">
                          Company (Optional)
                        </label>
                        <input
                          {...register('company')}
                          type="text"
                          id="company"
                          placeholder="Your company name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 text-sm"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-medium">
                          Project Type <span className="text-red-500">*</span>
                        </label>
                        <input type="hidden" {...register('type', { required: true })} />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                          {projectTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => setValue('type', type.value, { shouldValidate: true })}
                              className={cn(
                                'px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 text-left',
                                selectedType === type.value
                                  ? 'border-indigo-500/50 bg-indigo-500/10 text-[var(--foreground)]'
                                  : 'border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:border-indigo-500/30 hover:text-[var(--foreground)]'
                              )}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                        {errors.type && <p className="text-xs text-red-500">Please select a project type</p>}
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-medium flex items-center gap-2">
                          <DollarSign size={14} />
                          Budget Range (Optional)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                          {budgetOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setValue('budget', option.value)}
                              className={cn(
                                'px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300',
                                selectedBudget === option.value
                                  ? 'border-indigo-500/50 bg-indigo-500/10 text-[var(--foreground)]'
                                  : 'border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:border-indigo-500/30 hover:text-[var(--foreground)]'
                              )}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          {...register('message', {
                            required: 'Message should be at least 10 characters',
                            minLength: { value: 10, message: 'Message should be at least 10 characters' },
                            maxLength: { value: 2000, message: 'Message is too long' },
                          })}
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                          className={cn(
                            'w-full px-4 py-3.5 rounded-xl bg-[var(--background)] border transition-all duration-300 text-sm resize-none',
                            'focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
                            errors.message ? 'border-red-500/50' : 'border-[var(--border)] focus:border-indigo-500/50'
                          )}
                        />
                        {errors.message && <p className="text-xs text-red-500">{typeof errors.message.message === 'string' ? errors.message.message : 'Invalid input'}</p>}
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        size="xl"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        className="w-full"
                        rightIcon={!isSubmitting ? <Send size={18} /> : undefined}
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>

                      <p className="text-xs text-center text-[var(--muted-foreground)]">
                        By submitting, you agree to be contacted about your request.
                        No spam, ever.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
