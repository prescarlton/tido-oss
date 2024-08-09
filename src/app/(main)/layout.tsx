import '@mantine/core/styles.css'
import classes from './styles.module.scss'

import type { Metadata } from 'next'
import { AppShell, AppShellMain, Paper } from '@mantine/core'
import Sidebar from '@/components/common/app-sidebar'

export const metadata: Metadata = {
  title: 'Tido',
  description: 'Open source PM software',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell
      className={classes.appShell}
      layout="alt"
      navbar={{
        width: 240,
        breakpoint: 'sm',
      }}
      withBorder={false}
    >
      <Sidebar />
      <AppShellMain
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Paper withBorder radius="md" className={classes.pageContainer}>
          {children}
        </Paper>
      </AppShellMain>
    </AppShell>
  )
}
