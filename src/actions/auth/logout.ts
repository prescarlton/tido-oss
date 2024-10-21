'use server'

import { lucia, validateRequest } from '@/auth'
import { authenticationService } from '@/services'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function logout() {
  const { session } = await validateRequest()
  cookies().delete(lucia.sessionCookieName)
  try {
    // if not authenticated, delete cookie + redirect to login
    await authenticationService.logout(session?.id || '')
  } finally {
    return redirect('/signin')
  }
}
