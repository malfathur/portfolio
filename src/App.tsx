import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Nav dark={dark} onToggle={toggle} />
      <main className="bg-bg dark:bg-gray-950 transition-colors">
        <Hero />
        {/* ref-style page: single bg-bg flow, sections spaced with py-10 */}
        <div className="pb-16">
          <About />
          <Work />
          <Projects />
          <Skills />
        </div>
        <Contact />
      </main>
      <footer className="bg-dark dark:bg-gray-950 border-t border-white/5 py-4 text-center text-[11px] text-[#4b5568]">
        Akmal Fathurrahman · Built with React + Vite · 2026
      </footer>
    </>
  )
}
