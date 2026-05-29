import { SKILLS } from '../data/skills'

/* Maps to the ref's .pgroup style — bg-bg groups inside a white card */
const COLOR_MAP = {
  blue:   { header: 'text-blue',                          dot: 'text-blue',   bg: 'bg-bg dark:bg-gray-800' },
  purple: { header: 'text-purple',                        dot: 'text-purple', bg: 'bg-bg dark:bg-gray-800' },
  orange: { header: 'text-orange',                        dot: 'text-orange', bg: 'bg-bg dark:bg-gray-800' },
  green:  { header: 'text-green',                         dot: 'text-green',  bg: 'bg-bg dark:bg-gray-800' },
  grey:   { header: 'text-[#9ca3af] dark:text-gray-400', dot: 'text-[#9ca3af]', bg: 'bg-bg dark:bg-gray-800' },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg dark:bg-gray-950 py-10 px-6 transition-colors">
      <div className="max-w-[980px] mx-auto">

        {/* Section label */}
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#9ca3af] mb-[18px] flex items-center gap-[10px] after:content-[''] after:flex-1 after:h-px after:bg-border dark:after:bg-gray-700">
          Skills & Stack
        </p>

        {/* White card wrapper — matches ref .card.card-p */}
        <div className="bg-white dark:bg-gray-900 border border-border dark:border-gray-700 rounded-xl p-6 md:p-7">

          {/* Skill groups grid — matches ref .param-groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {SKILLS.map(sg => {
              const c = COLOR_MAP[sg.color]
              return (
                <div
                  key={sg.group}
                  className={`${c.bg} rounded-lg px-4 py-[14px] transition-colors`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-[1px] ${c.header} mb-2`}>
                    {sg.group}
                  </p>
                  <div className="flex flex-col gap-0">
                    {sg.items.map(item => (
                      <div
                        key={item}
                        className="text-[12px] text-[#4b5568] dark:text-gray-400 py-[3px] flex items-center gap-[6px]"
                      >
                        <span className={`${c.dot} font-bold`}>·</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
