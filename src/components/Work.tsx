const WORK_ITEMS = [
  {
    file: '/portfolio/dashboard.png',
    title: 'Platform Dashboard',
    caption: 'Real-time stats across tests, analyses, devices, and users',
  },
  {
    file: '/portfolio/clientmanagement.png',
    title: 'Organisation Management',
    caption: 'Multi-tenant client tracking with billing units and usage',
  },
  {
    file: '/portfolio/statsanalysis.png',
    title: 'Statistical Analysis',
    caption: 'Shapiro-Wilk and F-test results across test replicates',
  },
  {
    file: '/portfolio/dataanalysis.png',
    title: 'Regression Analysis',
    caption: 'LnI vs Voltage electrochemical regression with gradient extraction',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-10 px-6 transition-colors">
      <div className="max-w-[980px] mx-auto">

        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#9ca3af] mb-[18px] flex items-center gap-[10px] after:content-[''] after:flex-1 after:h-px after:bg-border dark:after:bg-gray-700">
          Production Work
        </p>

        <div className="bg-white dark:bg-gray-900 border border-border dark:border-gray-700 rounded-xl p-6 md:p-7">
          <p className="text-[12px] text-[#64748b] dark:text-gray-400 mb-5">
            Platform I manage end-to-end — architecture, roadmap, and cross-functional delivery. Includes the electrochemical and solid-state data science and analysis pipelines.
          </p>

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[17px] font-bold text-dark dark:text-gray-100">
              eProfiler Solutions — ePID Platform
            </h2>
            <span className="text-[10px] font-bold px-[10px] py-[3px] rounded-full bg-orange/10 dark:bg-orange/15 text-orange">
              Internal Platform
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORK_ITEMS.map(item => (
              <div
                key={item.file}
                className="border border-border dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <img
                  src={item.file}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-[13px] font-semibold text-dark dark:text-gray-100 mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-[#64748b] dark:text-gray-400 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
