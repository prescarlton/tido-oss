import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import { Lucia } from 'lucia'
import { prisma } from './prismaClient'
import { cache } from 'react'
import { Session } from '@prisma/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const adapter = new PrismaAdapter(prisma.session, prisma.user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username,
    }
  },
})

export const validateRequest = cache(
  async (): Promise<
    | { user: { id: number; username: string }; session: Session }
    | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return redirect('/signin')
      // return {
      //   user: null,
      //   session: null,
      // }
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
    } catch {}
    return result
  },
)

// IMPORTANT!
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    UserId: number
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseUserAttributes {
  username: string
}
