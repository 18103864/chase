import './globals.css'
import { Chewy } from 'next/font/google'

const chewy = Chewy({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '$CHASE',
  description: 'HONK HONK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={chewy.className}>
      <body>{children}</body>
    </html>
  )
}

