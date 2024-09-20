'use server'

import { prisma } from '@/prismaClient'
import { redirect } from 'next/navigation'

export default async function getProjectByCode(code: string) {
  const project = await prisma.project.findFirst({
    where: {
      code: code.toUpperCase(),
    },
  })
  if (!project) {
    return redirect('/not-found')
  }
  return project
}
