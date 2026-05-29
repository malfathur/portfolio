import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const LINKS = ['About', 'Projects', 'Skills', 'Contact'] as const

interface NavProps {
  dark: boolean
  onToggle: () => void
}

export default function Nav({ dark, onToggle }: NavProps) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const sections = LINKS.map(l => document.getElementById(l.toLowerCase()))
      const visible = [...sections]
        .reverse()
        .find((s): s is HTMLElement => s !== null && s.getBoundingClientRect().top <= 80)
      setActive(visible?.id ?? '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center justify-between px-7 bg-white dark:bg-dark border-b border-border dark:border-white/5 transition-colors">
      <a href="#" className="text-white font-bold text-[15px] tracking-tight">
        AF
      </a>

      <div className="flex items-center gap-5">
        {LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-[13px] font-medium transition-colors hidden sm:block ${
              active === link.toLowerCase()
                ? 'text-blue'
                : 'text-[#64748b] dark:text-[#9ca3af] hover:text-dark dark:hover:text-white'
            }`}
          >
            {link}
          </a>
        ))}

        <button
          onClick={onToggle}
          aria-label="Toggle theme"
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#64748b] dark:text-[#9ca3af] hover:text-dark dark:hover:text-white hover:bg-dark/5 dark:hover:bg-white/10 transition-all"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <a
          href="/Akmal_Fathurrahman_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-bold bg-orange text-white px-3 py-1.5 rounded-full hover:bg-orange/90 transition-colors"
        >
          CV ↓
        </a>
      </div>
    </nav>
  )
}
