const DOMAINS = [
  {
    label: 'PA',
    title: 'Data Science',
    desc: 'Climate-to-disease models, ML pipelines, scientific data analysis',
    bg:     'bg-blue-lt dark:bg-blue/10',
    accent: 'text-blue',
    border: 'border-blue/20',
  },
  {
    label: 'PB',
    title: 'Automation',
    desc: 'PDF agents, HR portals, LLM-powered workflow tools',
    bg:     'bg-orange-lt dark:bg-orange/10',
    accent: 'text-orange',
    border: 'border-orange/20',
  },
  {
    label: 'PC',
    title: 'Personal Tools',
    desc: 'Finance trackers, personal dashboards, productivity scripts',
    bg:     'bg-green-lt dark:bg-green/10',
    accent: 'text-green',
    border: 'border-green/20',
  },
]

const HIGHLIGHTS = [
  'Platform Development Manager at eProfiler Solutions Ltd',
  'Bridge between laboratory science and cloud infrastructure',
  'Physics PhD candidate, Universiti Malaya',
  'Distributed team lead across UK, Afghanistan, and Malaysia',
  'Daily user of LLMs and AI tools to accelerate development',
  'Builds across data science, automation, and personal tooling',
]

export default function About() {
  return (
    <section id="about" className="bg-bg dark:bg-gray-950 py-10 px-6 transition-colors">
      <div className="max-w-[980px] mx-auto">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#9ca3af] mb-[18px] flex items-center gap-[10px] after:content-[''] after:flex-1 after:h-px after:bg-border dark:after:bg-gray-700">
          About
        </p>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-border dark:border-gray-700 rounded-xl p-6 md:p-7">
          <div className="grid md:grid-cols-2 gap-7 items-start">

            {/* Left — bio + checklist */}
            <div>
              <span className="inline-block text-[10px] font-bold px-[10px] py-[3px] rounded-full bg-orange/10 dark:bg-orange/15 text-orange mb-3">
                Currently · eProfiler Solutions Ltd
              </span>
              <h2 className="text-[19px] font-bold text-dark dark:text-gray-100 mb-2 leading-snug">
                Builder mindset. Startup-hardened. Science-driven.
              </h2>
              <p className="text-[13px] text-[#4b5568] dark:text-gray-400 leading-[1.7] mb-4">
                Platform Development Manager at eProfiler Solutions — translating experimental
                sensor data into automated cloud workflows, and using AI tools daily to build
                faster. Currently completing a PhD in Physics at Universiti Malaya (thesis stage).
              </p>
              <ul className="list-none m-0 p-0">
                {HIGHLIGHTS.map(h => (
                  <li
                    key={h}
                    className="text-[13px] text-[#4b5568] dark:text-gray-400 py-1 pl-[22px] relative leading-[1.5] before:content-['✓'] before:absolute before:left-0 before:text-green before:font-bold before:text-[11px]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — domain cards */}
            <div className="flex flex-col gap-3">
              {DOMAINS.map(d => (
                <div
                  key={d.label}
                  className={`${d.bg} border ${d.border} rounded-[10px] px-5 py-4 transition-colors`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${d.accent}`}>
                      {d.label}
                    </span>
                    <span className="font-bold text-dark dark:text-gray-100 text-sm">{d.title}</span>
                  </div>
                  <p className="text-[#4b5568] dark:text-gray-400 text-xs leading-relaxed">{d.desc}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 text-[12px] text-[#9ca3af] mt-1">
                <span className="text-orange">📍</span>
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
