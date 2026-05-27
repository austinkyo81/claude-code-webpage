import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Community from '@/components/Community'
import VideoSection from '@/components/VideoSection'
import Footer from '@/components/Footer'
import ShaderBackground from '@/components/ui/shader-background'

export default function Home() {
  return (
    <main>
      <ShaderBackground />
      <Navigation />
      <Hero />
      <Services />
      <Community />
      <VideoSection />
      <Footer />
    </main>
  )
}
