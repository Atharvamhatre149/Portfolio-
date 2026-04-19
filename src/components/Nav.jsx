import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-2xl bg-black/40 border-b border-white/[0.06]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          <span className="accent-text">Atharva</span>
          <span className="text-white/70"> Mhatre</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 text-sm rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
        >
          Let's talk
        </a>

        <button
          className="md:hidden p-2 text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[2px] bg-white mb-1.5"></div>
          <div className="w-6 h-[2px] bg-white mb-1.5"></div>
          <div className="w-4 h-[2px] bg-white ml-auto"></div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}
