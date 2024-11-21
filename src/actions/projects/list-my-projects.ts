'use server'

import getUser from '@/actions/auth/get-user'
import { projectService } from '@/services'

export default async function listMyProjects() {
  const user = await getUser()
  return projectService.listProjectsByUserId(user.id)
}
