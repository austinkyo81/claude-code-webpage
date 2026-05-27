'use client'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/92 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="font-syne font-bold text-base tracking-[0.25em] uppercase text-white">
          AK9299 AI<span className="text-gold">.</span>
        </div>
        <a
          href="mailto:arnio93@gmail.com"
          className="font-mono text-xs tracking-[0.25em] uppercase px-5 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          Book Consultation
        </a>
      </div>
    </nav>
  )
}
