import './globals.css'
import { Chewy } from 'next/font/google'

const chewy = Chewy({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '$CHASE - The Token That Never Stops Chasing',
  description: 'Get ready to run - $CHASE is coming for you!',
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

