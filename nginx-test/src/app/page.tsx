import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

