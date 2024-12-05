import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
          お問い合わせ
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前
            </label>
            <Input id="name" placeholder="山田 太郎" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              メッセージ
            </label>
            <Textarea id="message" placeholder="お問い合わせ内容をご記入ください" rows={4} required />
          </div>
          <Button type="submit" className="w-full">
            送信する
          </Button>
        </form>
      </div>
    </section>
  )
}

