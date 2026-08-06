export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full blur-[120px] opacity-40 animate-pulse-slow"
           style={{ background: 'radial-gradient(circle, rgb(99 102 241) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 -right-1/4 w-[70%] h-[70%] rounded-full blur-[120px] opacity-30 animate-pulse-slow"
           style={{ background: 'radial-gradient(circle, rgb(139 92 246) 0%, transparent 70%)', animationDelay: '1s' }} />
      <div className="absolute -bottom-1/4 left-1/4 w-[60%] h-[60%] rounded-full blur-[120px] opacity-35 animate-pulse-slow"
           style={{ background: 'radial-gradient(circle, rgb(236 72 153) 0%, transparent 70%)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full blur-[150px] opacity-20"
           style={{ background: 'radial-gradient(circle, rgb(6 182 212) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      <div className="absolute inset-0 noise" />
    </div>
  )
}
