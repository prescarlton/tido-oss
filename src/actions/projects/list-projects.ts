'use server'
import { validateRequest } from '@/auth'
import { prisma } from '@/prismaClient'

const listProjects = async () => {
  const { user } = await validateRequest()
  return await prisma.project.findMany({
    where: {
      users: {
        some: {
          userId: user?.id,
        },
      },
    },
  })
}
export default listProjects
