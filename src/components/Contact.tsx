import { Github, Linkedin, Mail, Check } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'malfathur23@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="bg-[#dbeafe] dark:bg-dark py-24 px-6 text-center transition-colors">
      <div className="max-w-[520px] mx-auto">
        <p className="text-blue text-[10px] font-bold uppercase tracking-[2px] mb-4">
          Contact
        </p>
        <h2 className="text-dark dark:text-white text-3xl font-bold mb-4 leading-snug">
          Let's work together.
        </h2>
        <p className="text-[#64748b] dark:text-muted text-sm leading-relaxed mb-8">
          Open to contracts, freelance projects, and full-time roles in AI
          engineering, product, or operations.
        </p>

        <button
          onClick={handleEmail}
          className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors mb-8"
        >
          {copied ? <Check size={15} /> : <Mail size={15} />}
          {copied ? 'Copied!' : EMAIL}
        </button>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/malfathur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64748b] dark:text-muted hover:text-dark dark:hover:text-white text-[13px] font-medium transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/akmal-fathurrahman-02a27b218"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64748b] dark:text-muted hover:text-dark dark:hover:text-white text-[13px] font-medium transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
