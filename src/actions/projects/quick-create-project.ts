'use server'

import { projectService } from '@/services'
import getUser from '../auth/get-user'
import { revalidatePath } from 'next/cache'

export default async function quickCreateProject({ name }: { name: string }) {
  const user = await getUser()
  const project = await projectService.quickCreateProject(user.id, name)
  revalidatePath('/')
  return project
}
