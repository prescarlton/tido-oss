import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tido',
  description: 'Open source PM software',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          overscrollBehaviorY: 'none',
        }}
      >
        {children}
      </body>
    </html>
  )
}
