'use server'

import { projectService } from '@/services'

export default async function getProjectByCode(code: string) {
  return projectService.getProjectByCode(code)
}
