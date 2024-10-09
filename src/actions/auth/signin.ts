'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { lucia } from '@/auth'
import { authenticationService } from '@/services'
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants'

export async function signin({
  username,
  password,
}: {
  username: string
  password: string
}) {
  try {
    const user = await authenticationService.signin({ username, password })
    const session = await lucia.createSession(user.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    )
  } catch (err) {
    const error = err as Error
    return {
      error: error.message ?? DEFAULT_ERROR_MESSAGE,
    }
  }
  return redirect('/')
}
