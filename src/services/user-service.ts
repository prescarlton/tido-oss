import type { db } from '@/db'
import { user as UserTable } from '@/db/schema'
import { takeUnique } from '@/db/util'
import { eq } from 'drizzle-orm'
export function createUserService({
  db,
  user,
}: {
  db: db
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

export type UserService = ReturnType<typeof createUserService>
