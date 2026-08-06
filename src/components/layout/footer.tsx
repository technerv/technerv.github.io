import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircleCode } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-5">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="font-display font-bold text-white text-sm">TN</span>
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">
                TECHNERV
              </span>
            </a>
            <p className="text-[var(--muted-foreground)] max-w-md leading-relaxed mb-6">
              Building intelligent digital products that help businesses innovate and grow.
              Modern websites, scalable applications, AI-powered solutions, and cloud-ready platforms.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@technerv.com', label: 'Email' },
                { icon: MessageCircleCode, href: '#', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[var(--muted-foreground)] hover:text-white border border-[var(--border)] hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-[var(--muted-foreground)]">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'AI Solutions',
                'Cloud Services',
                'WordPress',
                'Business Automation',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider text-[var(--muted-foreground)]">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#' },
                { label: 'Work', href: '#work' },
                { label: 'Process', href: '#process' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {currentYear} TECHNERV. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms</a>
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 text-[var(--foreground)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for projects
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
