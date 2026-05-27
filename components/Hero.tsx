'use client'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dark veil on left half so text stays legible over the shader */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* Gold ambient glow, right side */}
      <div className="absolute top-1/4 right-0 w-[45%] h-[70%] bg-gradient-to-l from-gold/[0.08] via-gold/[0.03] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.06] blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 lg:py-0 w-full min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-16 lg:gap-20 items-center w-full">

          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={item} className="mb-7">
              <span className="font-mono text-xs tracking-[0.35em] uppercase text-gold border border-gold/30 px-3 py-1.5 inline-block">
                Enterprise AI Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-[1.8rem] sm:text-[2.7rem] md:text-[4rem] xl:text-[4.75rem] leading-[0.95] tracking-tight text-white mb-7"
            >
              AI Agents &<br />
              <span className="text-gray-300">Automations</span>
              <br />
              <span className="text-gold">for Enterprise</span>
              <br />
              Scale.
            </motion.h1>

            <motion.p variants={item} className="font-sans text-[1.05rem] text-gray-200 mb-2 leading-relaxed">
              Built exclusively for companies with{' '}
              <span className="text-white font-medium">€4M+</span> in annual revenue.
            </motion.p>
            <motion.p
              variants={item}
              className="font-sans text-[0.95rem] text-gray-300 mb-10 leading-relaxed max-w-[480px]"
            >
              Custom AI agents, n8n workflow automations, and strategic consulting
              that multiply operational efficiency across your enterprise.
            </motion.p>

            <motion.div variants={item}>
              <a
                href="mailto:austinkyo@gmail.com"
                className="inline-flex items-center gap-3 bg-gold text-black font-syne font-bold text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold-light transition-all duration-300 group"
              >
                Book Initial Consultation
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

            {/* Stat row */}
            <motion.div
              variants={item}
              className="mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-6"
            >
              {[
                { value: '€4M+', label: 'Min. Revenue' },
                { value: 'n8n', label: 'Automation' },
                { value: '100%', label: 'Custom-Built' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-bold text-2xl text-white mb-1">{stat.value}</div>
                  <div className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.25em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
          >
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-gold/50 z-10" />
              <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 border-gold/50 z-10" />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-2 border-l-2 border-gold/50 z-10" />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-gold/50 z-10" />

              {/* Outer glow ring */}
              <div className="absolute -inset-px border border-gold/10" />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <Image
                  src="/ich1.png"
                  alt="Arnold Oberleiter – Enterprise AI Expert"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="mt-4 block w-fit ml-10 bg-[#0d0d0d] border border-white/[0.08] px-4 py-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            >
              <div className="font-mono text-[9px] text-gray-600 uppercase tracking-widest mb-1">
                Specialization
              </div>
              <div className="font-syne font-bold text-sm text-white">AI Agent Development</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-mono text-[11px] text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/30 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
