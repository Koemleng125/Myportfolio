import { GraduationCap, Heart, BookOpen } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { type LucideIcon } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  org: string
  type: 'edu' | 'vol'
  Icon: LucideIcon
}

const TIMELINE: TimelineItem[] = [
  { year: '2023 – 2026', title: 'Bachelor Degree in Computer Science', org: 'Royal University of Phnom Penh',    type: 'edu', Icon: GraduationCap },
  { year: '2023',           title: 'Volunteer — SEA Games 32nd',          org: 'Southeast Asian Games, Cambodia',  type: 'vol', Icon: Heart        },
  { year: '2022',           title: 'High School Diploma',                  org: 'Preahsihouk High School',          type: 'edu', Icon: BookOpen     },
  { year: '2016 – 2019',   title: 'Secondary School',                     org: 'Toulpreahkhliang Secondary School',type: 'edu', Icon: BookOpen     },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="section-label">Background</div>
        <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '-1px' }}>
          Education & Experience
        </h2>
      </AnimatedSection>

      <div className="mt-10 sm:mt-14 relative">
        {/* Vertical line */}
        <div
          className="absolute left-4.75 top-4 bottom-0 w-px opacity-20"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {TIMELINE.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="flex gap-5 sm:gap-7 items-start">
                {/* Icon dot */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{
                    background: item.type === 'vol'
                      ? 'rgba(251,191,36,0.1)'
                      : 'rgba(110,231,183,0.1)',
                    border: `1px solid ${item.type === 'vol' ? 'rgba(251,191,36,0.3)' : 'rgba(110,231,183,0.3)'}`,
                  }}
                >
                  <item.Icon
                    size={16}
                    className={item.type === 'vol' ? 'text-yellow-400' : 'text-accent'}
                  />
                </div>

                <div className="card-hover rounded-lg p-4 sm:p-6 flex-1" style={{ background: 'var(--surface)' }}>
                  <div className="font-mono text-accent text-[10px] sm:text-[11px] tracking-[2px] mb-1 sm:mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-syne font-bold text-[15px] sm:text-[17px] mb-1">{item.title}</h3>
                  <p className="text-dim text-[12px] sm:text-[13px]">{item.org}</p>
                  {item.type === 'vol' && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <Heart size={10} className="text-yellow-400" fill="currentColor" />
                      <span className="volunteer-badge" style={{ marginTop: 0 }}>Volunteer</span>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
