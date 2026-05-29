export interface SkillGroup {
  group: string
  color: 'blue' | 'purple' | 'orange' | 'green' | 'grey'
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    group: 'Languages',
    color: 'blue',
    items: ['Python', 'R', 'TypeScript', 'SQL'],
  },
  {
    group: 'AI / LLM',
    color: 'purple',
    items: ['Groq API', 'Llama 3.3 70B', 'Prompt Engineering', 'AI-assisted Dev'],
  },
  {
    group: 'Data & ML',
    color: 'orange',
    items: ['pandas', 'scikit-learn', 'statsmodels', 'geopandas', 'Plotly', 'Streamlit'],
  },
  {
    group: 'Web',
    color: 'green',
    items: ['Next.js 14', 'React', 'Node.js', 'Express', 'Alpine.js', 'Tailwind CSS'],
  },
  {
    group: 'Tools & Infra',
    color: 'grey',
    items: ['Git', 'Render', 'Turso', 'Vite', 'uv', 'ruff', 'Click'],
  },
]
