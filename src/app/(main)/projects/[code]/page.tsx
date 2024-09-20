import ProjectDetails from '@/components/projects/project-details'

interface ProjectDetailsPageProps {
  params: {
    code: string
  }
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  return <ProjectDetails code={params.code} />
}
