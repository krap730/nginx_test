import { Card, CardContent } from '@/components/ui/card'
import { Palette, Globe, Package } from 'lucide-react'

export default function ServicesSectionSecond() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'ブランディング', icon: <Palette className="w-8 h-8 text-red-600 mb-4" /> },
            { title: 'Webデザイン', icon: <Globe className="w-8 h-8 text-red-600 mb-4" /> },
            { title: 'パッケージデザイン', icon: <Package className="w-8 h-8 text-red-600 mb-4" /> }
          ].map((service) => (
            <Card key={service.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  粒子のように細やかな注意を払い、あなたのブランドを輝かせます。
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}