import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { Lucia, Session, TimeSpan } from 'lucia'
import { cookies } from 'next/headers'
import { cache } from 'react'

import db from '@/db'
import { session, user } from '@/db/schema'

const adapter = new DrizzlePostgreSQLAdapter(db, session, user)

export const lucia = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(1, 'w'),
  sessionCookie: {
    name: '__session',
  },
  getUserAttributes: (attr) => {
    return {
      firstName: attr.firstName,
      lastName: attr.lastName,
      email: attr.email,
      username: attr.username,
    }
  },
})

export const validateRequest = cache(
  async (): Promise<
    | { user: DatabaseUserAttributes; session: Session }
    | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return {
        user: null,
        session: null,
      }
    }

    const result = await lucia.validateSession(sessionId)
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        )
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        )
      }
    } catch (e) {
      console.error(e)
    }
    return result
  },
)

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    UserId: string
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
}
