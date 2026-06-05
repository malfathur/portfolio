export type Category = 'PA' | 'PB' | 'PC'
export type ProjectStatus = 'live' | 'wip' | 'archived'

export interface Project {
  id: string
  title: string
  category: Category
  description: string
  stack: string[]
  demoUrl?: string
  repoUrl?: string
  status: ProjectStatus
}

export const PROJECTS: Project[] = [
  {
    id: 'hantavirus',
    title: 'Hantavirus Spillover Risk',
    category: 'PA',
    description:
      'End-to-end climate-to-disease pipeline. Links El Niño signals (NOAA ONI index) to CDC hantavirus case spikes via lag correlation, a binary spillover risk classifier, and a three-panel Streamlit dashboard.',
    stack: ['Python', 'pandas', 'scikit-learn', 'Streamlit', 'Plotly', 'geopandas'],
    demoUrl: undefined,
    repoUrl: undefined,
    status: 'wip',
  },
  {
    id: 'pdf-triage',
    title: 'PDF Triage Agent',
    category: 'PB',
    description:
      'Drop a folder of PDFs, get back structured CSV + markdown report in seconds. Schema-driven field extraction via Groq LLM — swap the JSON schema file to support any document type without touching code.',
    stack: ['Python', 'Groq API', 'Llama 3.3 70B', 'PyMuPDF', 'Click'],
    demoUrl: undefined,
    repoUrl: 'https://github.com/malfathur/pdf-triage-agent',
    status: 'live',
  },
  {
    id: 'teamly',
    title: 'Teamly — HR Portal',
    category: 'PB',
    description:
      'Self-hosted HR portal for small teams. Leave management, WFH requests, expense claims, clock in/out, one-click email approvals, role-based access, and a full admin console. Includes an AI workforce-analytics layer (Groq / Llama 3.3 70B) that turns leave, claim, and WFH data into role-scoped management insights. 28 Playwright tests.',
    stack: ['Node.js', 'Express', 'Turso', 'Alpine.js', 'Resend', 'Groq'],
    demoUrl: 'https://teamly-x5g1.onrender.com/preview',
    repoUrl: 'https://github.com/malfathur/teamly',
    status: 'live',
  },
  {
    id: 'ledgr',
    title: 'Ledgr — Finance Tracker',
    category: 'PC',
    description:
      'Self-hosted personal finance tracker. Log transactions against a hierarchical category tree, set monthly budgets, track recurring commitments, and get automatic overspend alerts. Multi-user, admin-managed.',
    stack: ['Next.js 14', 'TypeScript', 'Turso', 'Tailwind CSS', 'JWT'],
    demoUrl: 'https://ledgr-m27h.onrender.com/preview',
    repoUrl: 'https://github.com/malfathur/ledgr',
    status: 'live',
  },
]
