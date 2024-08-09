import getProjectBySlug from '@/actions/projects/get-project-by-slug'
import PageHeader from '@/components/common/page-header'
import ProjectTabs from '@/components/projects/project-tabs'

interface ProjectResourcesPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectResourcesPage({
  params,
}: ProjectResourcesPageProps) {
  const project = await getProjectBySlug(params.slug)

  const breadcrumbs = [
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: project.name,
      href: `/projects/${project.slug}`,
    },
  ]

  return (
    <div>
      <PageHeader breadcrumbs={breadcrumbs} primaryActions={<ProjectTabs />} />
      resources!
    </div>
  )
}
