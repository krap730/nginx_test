import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-blue-50 opacity-50 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-20 mix-blend-multiply"></div>
      </div>
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

