import getProjectByCode from '@/actions/projects/get-project-by-code'
import Page from '@/components/common/page'
import { ReactNode } from 'react'

export default async function ProjectLayout({
  params,
  children,
}: {
  params: { code: string }
  children: ReactNode
}) {
  const project = await getProjectByCode(params.code)
  const breadcrumbs = [
    { name: 'Projects', href: '/projects' },
    { name: project.name, href: `/projects/${project.code}` },
  ]
  const tabs = [
    { name: 'Overview', href: `/projects/${project.code}` },
    { name: 'Items', href: `/projects/${project.code}/items` },
    { name: 'Resources', href: `/projects/${project.code}/resources` },
  ]
  return (
    <Page breadcrumbs={breadcrumbs} tabs={tabs}>
      {children}
    </Page>
  )
}
