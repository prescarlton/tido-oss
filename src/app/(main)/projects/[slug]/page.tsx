import getProjectBySlug from '@/actions/projects/get-project-by-slug'
import PageHeader from '@/components/common/page-header'
import ProjectDetails from '@/components/projects/project-details'
import ProjectTabs from '@/components/projects/project-tabs'

interface ProjectDetailsPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
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
      <ProjectDetails slug={project.slug} />
    </div>
  )
}
