import { useEffect, useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-5 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? 'rgba(10,10,15,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(30,30,46,0.8)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <Code2 size={18} className="text-accent transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-mono text-accent text-[13px] tracking-[3px] flex items-center gap-1">
            VK<span className="cursor-dot" />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 cursor-pointer text-accent transition-colors hover:text-emerald-300"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className="fixed top-14.25 left-0 right-0 z-40 md:hidden flex flex-col overflow-hidden transition-all duration-300"
        style={{
          background: 'rgba(10,10,15,0.97)',
          backdropFilter: 'blur(20px)',
          maxHeight: menuOpen ? '320px' : '0px',
          borderBottom: menuOpen ? '1px solid rgba(30,30,46,0.8)' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-[13px] tracking-[2px] uppercase text-dim px-6 py-4 hover:text-accent transition-colors"
            style={{ borderBottom: '1px solid rgba(30,30,46,0.4)' }}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  )
}
