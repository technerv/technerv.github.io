import { motion, useInView, Variant, TargetAndTransition } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export function TextReveal({ children, className = '', delay = 0, as = 'div' }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06, delayChildren: delay },
        },
      }}
      className={className}
    >
      {typeof children === 'string'
        ? children.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em]">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: '110%' },
                  visible: {
                    y: '0%',
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))
        : children}
    </MotionTag>
  )
}

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  stagger?: number
}

export function FadeIn({ children, className = '', delay = 0, y = 30, x = 0, direction, duration = 0.7 }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  let offsetX = x
  let offsetY = y
  if (direction === 'up') offsetY = Math.abs(y)
  if (direction === 'down') offsetY = -Math.abs(y)
  if (direction === 'left') offsetX = Math.abs(x || y)
  if (direction === 'right') offsetX = -Math.abs(x || y)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offsetY, x: offsetX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: offsetY, x: offsetX }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
}

export function Stagger({ children, className = '', staggerChildren = 0.1, delayChildren = 0 }: StaggerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeItem: { hidden: TargetAndTransition; visible: TargetAndTransition } = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
