import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'

import { lucia } from '@/auth'

const getUser = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return redirect('/signin')
  const { user, session } = await lucia.validateSession(sessionId)
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      )
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      )
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }
  if (!user) return redirect('/signin')
  return user
})
export default getUser
