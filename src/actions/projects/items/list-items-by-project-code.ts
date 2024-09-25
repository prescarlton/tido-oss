'use server'

import { prisma } from '@/prismaClient'

export default async function listItemsByProjectCode(code: string) {
  return prisma.itemStatus.findMany({
    where: {
      Project: {
        code,
      },
      Items: {
        some: {},
      },
    },
    include: {
      Items: true,
    },
  })
}
