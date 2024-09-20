import { Prisma, PrismaClient } from '@prisma/client'

const projects = [
  {
    name: 'Tido',
    code: 'TIDO',
    description: 'Open-source project management tool',
  },
  {
    name: 'Phrased',
    code: 'PHRAS',
    description: 'Like Wheel of Fortune and Wordle combined',
  },
  {
    name: 'Sharq',
    code: 'SHARQ',
    description: 'AWS dashboard, but better',
  },
  {
    name: 'Sippytime',
    code: 'SIPPY',
    description: 'Happy hour and spot finder',
  },
  {
    name: 'Portfolio',
    code: 'PORTF',
    description: 'Personal website',
  },
]
const itemStatuses: Omit<Prisma.ItemStatusCreateManyInput, 'projectId'>[] = [
  {
    name: 'Backlog',
    description: 'Items that are not yet scheduled',
    group: 'BACKLOG',
  },
  {
    name: 'To Do',
    description: 'Items that are scheduled but not yet started',
    group: 'TODO',
  },
  {
    name: 'In Progress',
    description: 'Items that are currently being worked on',
    group: 'IN_PROGRESS',
  },
  {
    name: 'Done',
    description: 'Items that are completed',
    group: 'DONE',
  },
  {
    name: 'Cancelled',
    description: 'Items that are no longer being worked on',
    group: 'CANCELLED',
  },
]

const projectsSeed = async (prisma: PrismaClient) => {
  await Promise.all(
    projects.map(async (project) => {
      await prisma.project.create({
        data: {
          ...project,
          ItemStatuses: {
            createMany: {
              data: itemStatuses,
            },
          },
        },
      })
    }),
  )
}

export default projectsSeed
