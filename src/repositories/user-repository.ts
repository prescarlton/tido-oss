import { DbInstance } from '@/db'
import { user as UserTable } from '@/db/schema'
import { takeUnique } from '@/db/util'
import { eq } from 'drizzle-orm'

export function createUserRepository({
  db,
  user,
}: {
  db: DbInstance
  user: typeof UserTable
}) {
  return {
    getUserById: async (id: string) => {
      return db
        .selectDistinct()
        .from(user)
        .where(eq(user.id, id))
        .then(takeUnique)
    },
    getUserByUsername: async (username: string) => {
      return db
        .selectDistinct()
        .from(user)
        .where(eq(user.username, username))
        .then(takeUnique)
    },
    listUsers: async () => {
      return db.select().from(user)
    },
  }
}

export type UserRepository = ReturnType<typeof createUserRepository>
