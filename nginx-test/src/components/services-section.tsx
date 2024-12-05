import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Layers, BarChart, Globe } from 'lucide-react'

// 画像パス取得用の２行
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
// basePathを指定
const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";

const services = [
  {
    icon: Layers,
    title: 'デジタル戦略',
    description: '包括的なデジタル戦略を立案し、ビジネス目標の達成を支援します。',
    image: `${basePath}/placeholder.svg?height=400&width=600`
  },
  {
    icon: BarChart,
    title: 'データ分析',
    description: '高度なデータ分析で、インサイトを抽出し、意思決定をサポートします。',
    image: `${basePath}/placeholder.svg?height=400&width=600`
  },
  {
    icon: Globe,
    title: 'ソーシャルメディアマーケティング',
    description: '効果的なソーシャルメディア戦略で、ブランド認知度を向上させます。',
    image: `${basePath}/placeholder.svg?height=400&width=600`
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
          私たちのサービス
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-blue-50 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

