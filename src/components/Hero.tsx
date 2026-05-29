import { Github } from 'lucide-react'

const STATS = [
  { value: 'PhD Physics', label: 'Uni Malaya' },
  { value: '3+ yrs', label: 'eProfiler Solutions' },
  { value: '4 projects', label: 'shipped' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] dark:from-dark dark:to-[#0d0d18] pt-[52px] min-h-[92vh] flex flex-col items-center justify-center text-center px-6 transition-colors"
    >
      <p className="text-blue text-[11px] font-bold uppercase tracking-[2.5px] mb-4">
        AI Builder · Product & Ops Leader
      </p>

      <h1 className="text-dark dark:text-white text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
        Akmal Fathurrahman
      </h1>

      <p className="text-[#4b5568] dark:text-muted text-base md:text-lg max-w-[520px] leading-relaxed mb-8">
        I build AI-powered tools that turn scientific data and messy workflows
        into something useful.
      </p>

      <div className="flex gap-3 mb-12 flex-wrap justify-center">
        <a
          href="#projects"
          className="bg-orange hover:bg-orange/90 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
        >
          View Projects
        </a>
        <a
          href="https://github.com/malfathur"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-dark/20 dark:border-white/20 hover:border-dark/50 dark:hover:border-white/50 text-dark dark:text-white font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2"
        >
          <Github size={15} />
          GitHub
        </a>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {STATS.map(s => (
          <div
            key={s.value}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-green/20 dark:border-white/10 rounded-xl px-5 py-3 text-center"
          >
            <div className="text-dark dark:text-white font-bold text-sm">{s.value}</div>
            <div className="text-[#4b5568] dark:text-muted text-[11px] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
