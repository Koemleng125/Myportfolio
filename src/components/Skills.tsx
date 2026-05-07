import { Terminal, Layout, Server, Wrench, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface SkillGroup {
  label: string
  items: string[]
  Icon: React.ComponentType<{ size?: number; className?: string }>
}

const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages',    Icon: Terminal, items: ['C#', 'Java', 'PHP', 'JavaScript', 'TypeScript'] },
  { label: 'Frontend',     Icon: Layout,   items: ['HTML', 'CSS', 'Tailwind CSS', 'ReactJS', 'React TypeScript'] },
  { label: 'Backend',      Icon: Server,   items: ['PHP', 'Laravel', 'REST API','Node.js'] },
  { label: 'Tools & Other',Icon: Wrench,   items: ['VS Code', 'Git', 'GitHub', 'XAMPP', 'Canva', 'Photoshop'] },
]

const SOFT_SKILLS = ['Communication', 'Teamwork & Collaboration', 'Fast Learner', 'Problem Solving']

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="section-label">Technical Arsenal</div>
        <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '-1px' }}>
          Skills & Technologies
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
        {SKILL_GROUPS.map((group, i) => (
          <AnimatedSection key={group.label} delay={i * 80}>
            <div className="card-hover rounded-lg p-5 sm:p-7 h-full" style={{ background: 'var(--surface)' }}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <group.Icon size={14} className="text-accent" />
                <span className="font-mono text-accent text-[10px] sm:text-[11px] tracking-[2px] uppercase">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={400} className="mt-4 sm:mt-6">
        <div className="card-hover rounded-lg p-5 sm:p-7" style={{ background: 'var(--surface)' }}>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Users size={14} className="text-accent2" />
            <span className="font-mono text-accent text-[10px] sm:text-[11px] tracking-[2px] uppercase">Soft Skills</span>
          </div>
          <div className="flex flex-wrap">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="skill-tag" style={{
                color: 'var(--accent2)',
                borderColor: 'rgba(56,189,248,0.25)',
                background: 'rgba(56,189,248,0.05)',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
