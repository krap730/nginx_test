import Image from 'next/image'
import { Button } from '@/components/ui/button'

// 画像パス取得用の２行
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function HeroSection() {
  // basePathを指定
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            デジタルマーケティングの<br />新時代を創造する
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
            最先端のテクノロジーと創造的な戦略で、あなたのビジネスを次のレベルへ
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            サービスを見る
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src={`${basePath}/placeholder.svg?height=400&width=600`}
            alt="デジタルマーケティングのイメージ"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

