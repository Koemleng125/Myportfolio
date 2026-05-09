import { Globe, Monitor, Star, Layers } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { type LucideIcon } from 'lucide-react'

interface Project {
  button: any
  title: string
  desc: string
  stack: string[]
  tag: string
  highlight: boolean
  Icon: LucideIcon
}

const PROJECTS: Project[] = [
  {
    title: 'Event Management System',
    desc: 'Full-stack event booking platform with user authentication, event listing with search & filter, booking management, and an admin dashboard. Built with a Laravel REST API backend and a React TypeScript + Tailwind CSS frontend.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'REST API', 'MySQL'],
    tag: 'Full-Stack Web App',
    highlight: true,
    Icon: Globe,
    button: {
          text: 'View on GitHub',
          url: 'https://github.com/yourusername/event-management-system',
      }
  },
  {
    title: 'Employee Management System',
    desc: 'Desktop application for managing employee records — registration, department assignment, salary tracking, and attendance. Implements full CRUD operations with SQL Server database integration.',
    stack: ['C#', '.NET', 'Windows Forms', 'SQL Server'],
    tag: 'Desktop Application',
    highlight: false,
    Icon: Monitor,
    button: {
          text: 'View on GitHub', 
          url: 'https://github.com/yourusername/employee-management-system',
      }
  },
  {
    title: 'Student Management System',
    desc: 'Web application for managing student records — registration, course enrollment, grade tracking, and attendance. Built with a php  backend and  html,css,javascript frontend.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    tag: 'Full-Stack Web App',
    highlight: false,
    Icon: Layers,
    button: {
          text: 'View on GitHub',
          url: 'https://github.com/Koemleng125/Studentmanagement',
      }
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-5 sm:px-8 md:px-12" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="section-label">Work</div>
          <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '-1px' }}>
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 mt-10 sm:mt-14">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 120}>
              <div
                className="card-hover scanline-effect rounded-xl p-6 sm:p-9 h-full relative"
                style={{
                  background: 'var(--bg)',
                  borderColor: project.highlight ? 'rgba(110,231,183,0.25)' : 'var(--border)',
                }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{
                  background: project.highlight
                    ? 'linear-gradient(90deg, var(--accent), var(--accent2))'
                    : 'linear-gradient(90deg, var(--muted), transparent)',
                }} />

                {/* Featured badge */}
                {project.highlight && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1">
                    <Star size={10} className="text-accent" fill="currentColor" />
                    <span className="featured-badge">Featured</span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background: project.highlight
                      ? 'linear-gradient(135deg, rgba(110,231,183,0.15), rgba(56,189,248,0.1))'
                      : 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(110,231,183,0.15)',
                  }}
                >
                  <project.Icon
                    size={22}
                    className={project.highlight ? 'text-accent' : 'text-dim'}
                  />
                </div>

                <h3 className="font-syne font-bold text-lg sm:text-xl mb-2 pr-20 sm:pr-0">{project.title}</h3>

                {/* Tag with icon */}
                <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                  <Layers size={10} className="text-accent2" />
                  <span className="project-stack-badge">{project.tag}</span>
                </div>

                <p className="text-dim text-[13px] sm:text-[14px] leading-relaxed mb-5 sm:mb-6 font-mono">{project.desc}</p>

                <div className="flex flex-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="skill-tag" style={{ fontSize: 10 }}>{tech}</span>
                  ))}
                 
                </div>
                 <a
                    href={project.button.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto mt-2 sm:mt-0 text-[10px] font-mono text-accent hover:underline"
                  >
                    {project.button.text}
                  </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
