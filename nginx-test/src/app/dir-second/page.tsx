import Image from 'next/image'
import Header from '@/components/header'
import HeroSectionSecond from '@/components/components-second/hero-section-second'
import ServicesSectionSecond from '@/components/components-second/services-section-second'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

// 画像パス取得用の２行
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function Home() {
  // basePathを指定
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  // 背景画像PATHは動的に生成するためにstyleで指定(以下の指定方法では動的にPATH設定ができず、next/imgを使うには最適化を無効にする必要があるため)
  // <div className="absolute inset-0 bg-[url('/img-dir-test/granular.jpg')] opacity-20 mix-blend-multiply"></div>

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-blue-50 opacity-50 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{ backgroundImage: `url(${basePath}/img-dir-test/granular.jpg)`, backgroundSize: 'cover' }}
        ></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSectionSecond />
          <ServicesSectionSecond />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
