'use client'
import { motion } from 'framer-motion'

export default function Community() {
  return (
    <section id="community" className="bg-black py-32 md:py-44 relative overflow-hidden">
      {/* Radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_65%)]" />

      {/* Horizontal rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.span
          className="font-mono text-xs tracking-[0.35em] uppercase text-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Join the Movement
        </motion.span>

        <motion.h2
          className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-white mt-6 mb-6 leading-[0.95]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          AK9299 AI:<br />
          <span className="text-gold">KI-Revolution</span>
        </motion.h2>

        <motion.p
          className="font-sans text-[1.05rem] text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          Join a premium community of business leaders and entrepreneurs mastering AI
          for competitive advantage. Exclusive content, live sessions, and direct access
          to Arnie's expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.65 }}
        >
          <a
            href="https://www.skool.com/ai-mit-arnie-ki-revolution/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-black font-syne font-bold text-[0.7rem] tracking-[0.2em] uppercase px-10 py-5 hover:bg-gold transition-all duration-300 group"
          >
            Join the Community
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="mt-20 pt-12 border-t border-white/[0.05] grid grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          {[
            { label: 'Live Workshops', symbol: '◆' },
            { label: 'Expert Network', symbol: '◆' },
            { label: 'Exclusive Content', symbol: '◆' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-gold text-[10px] mb-2.5">{item.symbol}</div>
              <div className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.25em]">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
