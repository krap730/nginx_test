import Image from 'next/image'
import { Button } from '@/components/ui/button'

// 画像パス取得用の２行
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function HeroSectionSecond() {
  // basePathを指定
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  return (

    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-10 grain-effect"></div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            創造性を<br />粒子のように<br />広げる
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Grain Design Co.は、粒子のようにきめ細やかなデザインで、
            あなたのブランドを際立たせます。
            </p>
            <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-4">
            私たちの作品を見る
            </Button>
        </div>
        <div className="md:w-1/2">
            <Image
            src="/placeholder.svg?height=400&width=600"
            alt="創造的なデザインのイメージ"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
            />
        </div>
        </div>
    </section>
  )
}

