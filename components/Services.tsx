'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 'consulting',
    tag: 'Consulting',
    headline: 'AI Agents & Enterprise Automation',
    description:
      'Custom-built AI agents and n8n automation workflows for companies with €4M+ annual revenue. End-to-end: from workflow analysis to full deployment and ongoing optimisation.',
    features: [
      'Custom AI agent architecture',
      'n8n workflow automation',
      'LLM integration & fine-tuning',
      'Enterprise system integration',
      'Ongoing optimisation & support',
    ],
  },
  {
    id: 'training',
    tag: 'Training',
    headline: 'Workshops & Expert Education',
    description:
      'Deep-dive workshops for teams and executives on the AI technologies shaping the future of business. Practical, hands-on, immediately applicable.',
    features: [
      'Large Language Models (LLMs)',
      'Diffusion & generative image AI',
      'n8n workflow automation',
      'Claude Code & AI dev tools',
      'ComfyUI & creative AI pipelines',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#030303] py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20">
          <motion.span
            className="font-mono text-xs tracking-[0.35em] uppercase text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.span>
          <motion.h2
            className="font-syne font-extrabold text-4xl md:text-5xl text-white mt-4 leading-tight max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65, ease: 'easeOut' }}
          >
            Two Ways Arnie Scales Your Business
          </motion.h2>
        </div>

        {/* Service cards — separated by a 1px line */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.04] mb-px">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-[#030303] p-10 md:p-14 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.65 }}
            >
              <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-gold border border-gold/30 inline-block px-3 py-1.5 mb-8">
                {service.tag}
              </span>
              <h3 className="font-syne font-bold text-2xl md:text-[1.75rem] text-white mb-4 leading-tight">
                {service.headline}
              </h3>
              <p className="font-sans text-[0.93rem] text-gray-300 mb-9 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Full-width image banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative mt-px overflow-hidden"
        >
          <div className="relative h-[380px] md:h-[480px]">
            <Image
              src="/ich2.png"
              alt="Arnold Oberleiter – AI Consulting"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/70 to-transparent" />

            <div className="absolute bottom-10 left-10 md:left-14 max-w-md">
              <span className="font-mono text-[9px] text-gold/70 uppercase tracking-widest block mb-3">
                Results-driven
              </span>
              <p className="font-syne font-bold text-2xl md:text-3xl text-white leading-tight">
                AI for businesses that are ready to lead.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
