import { PrismaClient } from '@prisma/client'
import projectsSeed from './projects'

const prisma = new PrismaClient()

async function main() {
  await Promise.all([projectsSeed(prisma)])
  await prisma.$disconnect()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
