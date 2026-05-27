export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="font-syne font-bold text-lg tracking-[0.25em] uppercase text-white mb-4">
              Arnie<span className="text-gold">.</span>
            </div>
            <p className="font-sans text-sm text-gray-600 max-w-xs leading-relaxed">
              AI Agents & Automations for enterprise-scale businesses with €4M+ annual revenue.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em] mb-5">
              Contact
            </div>
            <a
              href="mailto:arnio93@gmail.com"
              className="font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200 block"
            >
              arnio93@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em] mb-5">
              Follow
            </div>
            <div className="space-y-3">
              <a
                href="https://www.youtube.com/@Arnold-Oberleiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube Channel
              </a>
              <a
                href="https://www.skool.com/ai-mit-arnie-ki-revolution/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Skool Community
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Arnold Oberleiter. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-gray-800 uppercase tracking-[0.2em]">
            AI mit Arnie · KI-Revolution
          </p>
        </div>
      </div>
    </footer>
  )
}
