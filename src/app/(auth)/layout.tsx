import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Tido',
  description: 'Open source PM software',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
