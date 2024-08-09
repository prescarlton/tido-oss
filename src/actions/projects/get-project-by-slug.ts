'use server'

import { prisma } from '@/prismaClient'
import { redirect } from 'next/navigation'

export default async function getProjectBySlug(slug: string) {
  const project = await prisma.project.findFirst({
    where: {
      slug,
    },
  })
  if (!project) {
    return redirect('/not-found')
  }
  return project
}
