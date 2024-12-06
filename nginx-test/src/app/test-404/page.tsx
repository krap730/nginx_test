import { notFound } from 'next/navigation'

export default function Page() {
  // 何らかの条件で404にしたいとき
  notFound()

  return (
    <div>表示されないコンテンツ</div>
  )
}
