import type { DbInstance } from '@/db'
import { session as SessionTable } from '@/db/schema'
import { UserService } from '.'
import { verify } from '@node-rs/argon2'

import { eq } from 'drizzle-orm'

export function createAuthenticationService({
  db,
  session,
  userService,
}: {
  db: DbInstance
  session: typeof SessionTable
  userService: UserService
}) {
  return {
    signin: async ({
      username,
      password,
    }: {
      username: string
      password: string
    }) => {
      const user = await userService.getUserByUsername(username)
      if (!user) {
        throw new Error('Invalid credentials')
      }
      const passwordHash = user.passwordHash || ''
      const validPassword = await verify(passwordHash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      })
      if (!validPassword) {
        throw new Error('Invalid credentials')
      }

      return user
    },
    logout: async (sessionId: string) => {
      return db.delete(session).where(eq(session.id, sessionId))
    },
  }
}
