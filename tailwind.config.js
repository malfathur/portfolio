/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark:   '#09090f',
        mid:    '#111827',
        blue:   '#4f7ef8',
        'blue-lt': '#eef2ff',
        orange: '#f07b32',
        'orange-lt': '#fff4ec',
        green:  '#34c38f',
        'green-lt': '#e8f8f1',
        purple: '#8b5cf6',
        'purple-lt': '#f3e8ff',
        muted:  '#b0b8d4',
        border: '#e5e9f0',
        bg:     '#dbeafe',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
