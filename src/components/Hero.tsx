import { ArrowRight, Mail, FolderGit2, BookOpen, Cpu } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Projects',      Icon: FolderGit2 },
  { value: '2+', label: 'Years Study',   Icon: BookOpen   },
  { value: '10+', label: 'Technologies', Icon: Cpu        },
]

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Rings */}
      <div className="hero-ring animate-spin-slow" style={{ width: 260, height: 260, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="hero-ring animate-spin-slow hidden sm:block" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animationDuration: '25s' }} />
      <div className="hero-ring animate-spin-reverse hidden sm:block" style={{ width: 620, height: 620, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      {/* Glow blob */}
      <div className="absolute rounded-full pointer-events-none" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(110,231,183,0.07) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      }} />

      <div className="relative z-10 text-center px-6 sm:px-8 pt-28 pb-16 w-full max-w-3xl mx-auto">
        <p
          className="font-mono text-accent text-[11px] sm:text-[12px] tracking-[3px] sm:tracking-[4px] uppercase opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards', animationDelay: '0ms' }}
        >
          Full-Stack Developer
        </p>

        <h1
          className="font-syne font-extrabold leading-[1.05] mt-4 opacity-0 animate-fade-up"
          style={{
            fontSize: 'clamp(40px, 10vw, 96px)',
            letterSpacing: 'clamp(-1px, -0.03em, -3px)',
            animationFillMode: 'forwards',
            animationDelay: '150ms',
          }}
        >
          Va <span className="glow-text">Koemleng</span>
        </h1>

        <p
          className="text-dim text-[14px] sm:text-[16px] leading-relaxed mt-5 max-w-sm sm:max-w-lg mx-auto opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards', animationDelay: '250ms' }}
        >
          Building modern web experiences with React & Laravel. Currently pursuing B.IT at Royal University of Phnom Penh.
        </p>

        <div
          className="flex gap-3 sm:gap-4 justify-center flex-wrap mt-8 sm:mt-10 opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards', animationDelay: '350ms' }}
        >
          <a
            href="#projects"
            className="font-mono text-[12px] sm:text-[13px] tracking-widest px-6 sm:px-8 py-3 rounded bg-accent text-bg font-bold transition-all duration-200 hover:bg-emerald-200 flex items-center gap-2"
          >
            View Work <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="font-mono text-[12px] sm:text-[13px] tracking-widest px-6 sm:px-8 py-3 rounded border border-accent/40 text-accent transition-all duration-200 hover:bg-accent/10 flex items-center gap-2"
          >
            <Mail size={14} /> Contact Me
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-8 sm:gap-12 justify-center mt-12 sm:mt-16 opacity-0 animate-fade-up"
          style={{ animationFillMode: 'forwards', animationDelay: '450ms' }}
        >
          {STATS.map(({ value, label, Icon }) => (
            <div key={label} className="text-center group">
              <div className="flex justify-center mb-1">
                <Icon size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
              </div>
              <div className="font-syne font-extrabold text-[24px] sm:text-[28px] text-accent">{value}</div>
              <div className="font-mono text-[10px] sm:text-[11px] text-dim tracking-[2px] mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
