import Page from '@/components/common/page'
import getUser from '@/actions/auth/get-user'
import OpenTasks from '@/components/home/open-tasks'
import QuickActions from '@/components/home/quick-actions'
import RecentActivity from '@/components/home/recent-activity'
import listMyProjects from '@/actions/projects/list-my-projects'
import GetStartedDialog from '@/components/home/get-started-dialog'

export default async function PersonalizedHomepage() {
  const user = await getUser()
  const projects = await listMyProjects()

  return (
    <Page>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <QuickActions />
        <div className="flex gap-6">
          <OpenTasks />
          <RecentActivity />
        </div>
      </div>
      {projects.length === 0 && <GetStartedDialog />}
    </Page>
  )
}
