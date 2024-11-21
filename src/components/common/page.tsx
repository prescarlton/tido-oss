import { ReactNode } from 'react'
import PageHeader from './page-header'

interface PageProps {
  breadcrumbs?: { name: string; href: string }[]
  tabs?: { name: string; href: string }[]
  children: ReactNode
}
export default function Page({ breadcrumbs, children, tabs }: PageProps) {
  return (
    <div className="flex flex-col flex-1">
      <PageHeader breadcrumbs={breadcrumbs} tabs={tabs} />
      {children}
    </div>
  )
}
