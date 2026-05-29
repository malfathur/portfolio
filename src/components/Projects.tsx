import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS, type Category } from '../data/projects'

type Filter = 'All' | Category

const FILTERS: Filter[] = ['All', 'PA', 'PB', 'PC']

const CATEGORY_META: Record<Category, { label: string; bg: string; text: string }> = {
  PA: { label: 'PA — Data Science', bg: 'bg-blue-lt dark:bg-blue/10',     text: 'text-blue' },
  PB: { label: 'PB — Automation',   bg: 'bg-orange-lt dark:bg-orange/10', text: 'text-orange' },
  PC: { label: 'PC — Personal',     bg: 'bg-green-lt dark:bg-green/10',   text: 'text-green' },
}

const STATUS_META = {
  live:     { label: 'Live',     bg: 'bg-green-lt dark:bg-green/10',   text: 'text-green' },
  wip:      { label: 'WIP',      bg: 'bg-orange-lt dark:bg-orange/10', text: 'text-orange' },
  archived: { label: 'Archived', bg: 'bg-gray-100 dark:bg-white/5',    text: 'text-gray-500' },
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = PROJECTS.filter(p => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="bg-bg dark:bg-gray-950 py-10 px-6 transition-colors">
      <div className="max-w-[980px] mx-auto">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#9ca3af] mb-[18px] flex items-center gap-[10px] after:content-[''] after:flex-1 after:h-px after:bg-border dark:after:bg-gray-700">
          Projects
        </p>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[11px] font-bold px-4 py-1.5 rounded-full border transition-all ${
                filter === f
                  ? 'bg-dark dark:bg-blue text-white border-dark dark:border-blue'
                  : 'bg-white dark:bg-gray-800 text-[#4b5568] dark:text-gray-400 border-border dark:border-gray-700 hover:border-blue/40 dark:hover:border-gray-500'
              }`}
            >
              {f === 'All' ? 'All' : CATEGORY_META[f as Category].label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {visible.map(project => {
            const cat = CATEGORY_META[project.category]
            const st  = STATUS_META[project.status]
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-xl p-5 flex flex-col hover:border-blue dark:hover:border-blue hover:shadow-[0_4px_14px_rgba(79,126,248,0.1)] transition-all cursor-default"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-[10px] py-[3px] rounded-full ${cat.bg} ${cat.text}`}>
                    {project.category}
                  </span>
                  <span className={`text-[10px] font-bold px-[10px] py-[3px] rounded-full ${st.bg} ${st.text}`}>
                    {st.label}
                  </span>
                </div>

                <h3 className="font-bold text-dark dark:text-gray-100 text-[13px] mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[12px] text-[#4b5568] dark:text-gray-400 leading-[1.5] flex-1 mb-4">
                  {project.description}
                </p>

                {/* Stack chips — ref input-tag style */}
                <div className="flex flex-wrap gap-[5px] mb-4">
                  {project.stack.map(s => (
                    <span
                      key={s}
                      className="bg-[#f1f5f9] dark:bg-gray-800 text-[#4b5568] dark:text-gray-400 text-[11px] font-mono px-[7px] py-[2px] rounded border border-[#e2e8f0] dark:border-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-3 border-t border-[#f5f7fb] dark:border-gray-700">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-bold text-blue hover:text-blue/80 transition-colors"
                    >
                      <ExternalLink size={11} /> Demo
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-bold text-[#4b5568] dark:text-gray-400 hover:text-dark dark:hover:text-gray-100 transition-colors"
                    >
                      <Github size={11} /> Repo
                    </a>
                  ) : null}
                  {!project.demoUrl && !project.repoUrl && (
                    <span className="text-[11px] text-[#9ca3af]">Repos coming soon</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
