import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DigitalPulse
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
            サービス
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
            会社概要
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            お問い合わせ
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          無料相談
        </Button>
      </div>
    </header>
  )
}

