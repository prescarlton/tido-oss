import getProjectByCode from '@/actions/projects/get-project-by-code'
import PageHeader from '@/components/common/page-header'
import ProjectTabs from '@/components/projects/project-tabs'
import { ReactNode } from 'react'

interface LayoutProps {
  params: {
    code: string
  }
  children: ReactNode
}
export default async function Layout({ params, children }: LayoutProps) {
  const project = await getProjectByCode(params.code)

  const breadcrumbs = [
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: project.name,
      href: `/projects/${project.code}`,
    },
  ]
  return (
    <div>
      <PageHeader breadcrumbs={breadcrumbs} primaryActions={<ProjectTabs />} />
      {children}
    </div>
  )
}
