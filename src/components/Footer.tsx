import { Code2, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 sm:px-12 py-6 sm:py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-2">
        <Code2 size={14} className="text-accent" />
        <span className="font-mono text-[11px] text-muted tracking-[1px]">
          {new Date().getFullYear()} Va Koemleng
        </span>
      </div>

      <span className="font-mono text-[11px] text-muted tracking-[1px] flex items-center gap-1.5">
        <MapPin size={11} className="text-accent" /> Phnom Penh
      </span>
    </footer>
  )
}
