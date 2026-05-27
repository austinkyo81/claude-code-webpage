import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AK9299 AI Revolution | Enterprise AI Agents & Automations",
  description:
    'Custom AI Agents & Automations for enterprise-scale businesses with €4M+ revenue. Led by AK9299.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans bg-black text-white antialiased">{children}</body>
    </html>
  )
}
