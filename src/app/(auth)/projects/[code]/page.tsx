import getProjectByCode from '@/actions/projects/get-project-by-code'
import Stack from '@/components/ui/stack'
import { Separator } from '@/components/ui/separator'

interface ProjectDashboardProps {
  params: {
    code: string
  }
}

export default async function ProjectDashboard({
  params,
}: ProjectDashboardProps) {
  const project = await getProjectByCode(params.code)
  return (
    <div className="mt-24 w-7/12 mx-auto flex flex-col">
      <Stack gap={6}>
        <Stack gap={2}>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <h3 className="text-gray-400 text-sm">
            {`No description yet, but this is where I'd put one if I were you.`}
          </h3>
        </Stack>
        <Stack gap={2}>
          <div className="flex gap-4">
            <p className="text-gray-400 text-sm">Resources</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-400 text-sm">Members</p>
          </div>
        </Stack>
        <Separator />
        <div className="flex gap-4">
          <p className="text-gray-400 text-sm">Recent Activity</p>
        </div>
      </Stack>
    </div>
  )
}
