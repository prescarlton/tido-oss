import { validateRequest } from '@/auth'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import SessionProvider from '@/providers/session-provider'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Tido',
  description: 'Open source PM software',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await validateRequest()
  if (session.user === null || session.session === null) {
    return redirect('/signin')
  }
  return (
    <SessionProvider value={session}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </SessionProvider>
  )
}
