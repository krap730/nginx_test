import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">DigitalPulse</h3>
          <p className="text-sm">
            最先端のデジタルマーケティングソリューションを提供し、ビジネスの成長を加速させます。
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">リンク</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#services" className="hover:underline">
                サービス
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                会社概要
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
          <p className="text-sm">
            〒100-0001<br />
            東京都千代田区千代田1-1<br />
            TEL: 03-1234-5678<br />
            Email: info@digitalpulse.com
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-blue-500 text-center text-sm">
        &copy; 2024 DigitalPulse. All rights reserved.
      </div>
    </footer>
  )
}

