import { Phone, MapPin, Languages, Send } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { type LucideIcon } from 'lucide-react'

interface ContactItem {
  label: string
  value: string
  Icon: LucideIcon
}

const CONTACT_ITEMS: ContactItem[] = [
  { label: 'Phone',    value: '069 90 20 42',                           Icon: Phone     },
  { label: 'Location', value: 'Phnom Penh City, Cambodia',              Icon: MapPin    },
  { label: 'Language', value: 'Khmer (Native) · English (Intermediate)',Icon: Languages },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-5 sm:px-8 md:px-12" style={{ background: 'var(--surface)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <div className="section-label justify-center">Get in Touch</div>
          <h2
            className="font-syne font-extrabold mb-4 sm:mb-5"
            style={{ fontSize: 'clamp(28px,5vw,64px)', letterSpacing: 'clamp(-1px,-0.03em,-2px)' }}
          >
            Let's Build<br />
            <span className="glow-text">Something Great</span>
          </h2>
          <p className="text-dim text-[14px] sm:text-[16px] leading-relaxed mb-8 sm:mb-12 max-w-sm sm:max-w-lg mx-auto">
            I'm open to internship opportunities, freelance projects, or just a friendly conversation about tech.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col gap-3 sm:gap-4">
            {CONTACT_ITEMS.map(({ label, value, Icon }) => (
              <div
                key={label}
                className="card-hover rounded-lg px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-4 text-left group"
                style={{ background: 'var(--bg)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                  style={{
                    background: 'rgba(110,231,183,0.08)',
                    border: '1px solid rgba(110,231,183,0.2)',
                  }}
                >
                  <Icon size={15} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-accent tracking-[2px] uppercase">{label}</div>
                  <div className="text-[13px] sm:text-[14px] mt-0.5">{value}</div>
                </div>
              </div>
            ))}
            <div className="card-hover rounded-lg px-5 sm:px-8 py-5 flex flex-col gap-4" style={{ background: 'var(--bg)' }}>
              <input type="text" placeholder="Your Name"  className="card-hover rounded-lg px-1 sm:px-5 py-2 sm:py-5 flex items-center gap-4 text-left group outline-0 font-mono"
                style={{ background: 'var(--bg)' }} />
              <input type="email" placeholder="Your Email" className="card-hover rounded-lg px-1 sm:px-5 py-2 sm:py-5 flex items-center gap-4 text-left group outline-0 font-mono"
                style={{ background: 'var(--bg)' }} />
              <textarea placeholder="Your Message" rows={5} className="card-hover rounded-lg px-1 sm:px-8 py-2 sm:py-5 flex items-center gap-4 text-left group outline-0 font-mono"
                style={{ background: 'var(--bg)' }} />  
            </div>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="mailto:koemlengva@gmail.com"
                className="w-full font-mono text-[13px] tracking-widest px-8 py-3.5 rounded-lg bg-accent text-bg font-bold transition-all duration-200 hover:bg-emerald-200 flex items-center justify-center gap-2"
              >
                <Send size={14} /> Send Message
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
