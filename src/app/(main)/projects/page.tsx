import listProjects from '@/actions/projects/list-projects'
import PageHeader from '@/components/common/page-header'
import ProjectFilters from '@/components/projects/project-filters'
import ProjectsTable from '@/components/projects/projects-table'
import { Button, Flex } from '@mantine/core'
import { Plus } from 'lucide-react'

export default async function ProjectsPage() {
  const projects = await listProjects()

  return (
    <Flex direction="column">
      <PageHeader
        title="Projects"
        action={
          <Button size="xs" leftSection={<Plus size={14} />} variant="subtle">
            Create Project
          </Button>
        }
      />
      <ProjectFilters />
      <ProjectsTable projects={projects} />
    </Flex>
  )
}
