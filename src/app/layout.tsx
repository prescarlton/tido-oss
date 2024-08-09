import '@mantine/core/styles.css'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from './theme'

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
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{
          overscrollBehaviorY: 'none',
        }}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
