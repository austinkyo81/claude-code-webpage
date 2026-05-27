'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="growth"
      className="bg-[#030303] py-32 md:py-44 relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,_rgba(201,168,76,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            className="font-mono text-xs tracking-[0.35em] uppercase text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Opportunity
          </motion.span>
          <motion.h2
            className="font-syne font-extrabold text-4xl md:text-6xl text-white mt-6 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Scale Your Business{' '}
            <span className="text-gold">With AI.</span>
          </motion.h2>
          <motion.p
            className="font-sans text-[0.95rem] text-gray-300 mt-5 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            The companies leveraging AI agents today will define their industries tomorrow.
          </motion.p>
        </div>

        {/* Video reveal */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.92, y: 64 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Corner ornaments */}
          <div className="absolute -top-2.5 -left-2.5 w-10 h-10 border-t-2 border-l-2 border-gold/40 z-10" />
          <div className="absolute -top-2.5 -right-2.5 w-10 h-10 border-t-2 border-r-2 border-gold/40 z-10" />
          <div className="absolute -bottom-2.5 -left-2.5 w-10 h-10 border-b-2 border-l-2 border-gold/40 z-10" />
          <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-gold/40 z-10" />

          {/* Outer border */}
          <div className="absolute -inset-px border border-white/[0.06]" />

          {/* Gold edge glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/[0.04] via-transparent to-gold/[0.04] pointer-events-none" />

          <video
            ref={videoRef}
            src="/video.mp4"
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full block"
          />
        </motion.div>

        {/* Bottom CTA row */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.65 }}
        >
          <a
            href="mailto:arnio93@gmail.com"
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold/80 hover:text-gold transition-colors duration-300 border-b border-gold/30 hover:border-gold/60 pb-0.5"
          >
            Start your AI transformation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
