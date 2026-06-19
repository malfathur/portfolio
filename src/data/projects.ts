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
    id: 'skillscope',
    title: 'SkillScope — Job Skills Gap Analysis',
    category: 'PA',
    description:
      'Scrapes JobStreet Malaysia for AI Engineer and Data Analyst roles, extracts in-demand skills against a 115-skill taxonomy, and surfaces gap analysis in a live dashboard — which skills each role demands, top hiring companies, and the overlap between roles.',
    stack: ['Python', 'Playwright', 'pandas', 'Streamlit', 'Plotly'],
    demoUrl: undefined,
    repoUrl: 'https://github.com/malfathur/skillscope',
    status: 'live',
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
    id: 'adpulse',
    title: 'AdPulse — Marketing Performance Tool',
    category: 'PB',
    description:
      'Turns raw marketing exports into KPIs, A–F benchmark grades, charts, and an AI-written report. Auto-detects Meta, Google, SEO, social, and influencer formats, with a validation-first deep mode for paid social (audience-fatigue detection, objective-aware recommendations), a CPA-weighted budget optimiser, and an Ask-the-Analyst follow-up chat. 21 unit tests.',
    stack: ['Python', 'Streamlit', 'pandas', 'Plotly', 'Groq', 'Llama 3.3 70B'],
    demoUrl: 'https://adpulse.streamlit.app/',
    repoUrl: 'https://github.com/malfathur/adpulse',
    status: 'live',
  },
  {
    id: 'n8n-support-triage',
    title: 'n8n Customer Support Triage',
    category: 'PB',
    description:
      'Self-improving RAG support pipeline in n8n. Answers customer tickets only from a live knowledge base and escalates anything it cannot ground to a human — whose reply is appended back to the KB, so coverage grows automatically. Difficulty/in-context gating, three-key Groq failover with backoff, and an error-trigger alerting workflow.',
    stack: ['n8n', 'Groq', 'Llama 3.3 70B', 'Google Sheets', 'Resend', 'RAG'],
    demoUrl: undefined,
    repoUrl: 'https://github.com/malfathur/n8n-customer-support-triage',
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
