'use server'

import { lucia } from '@/auth'
import { prisma } from '@/prismaClient'
import { hash } from '@node-rs/argon2'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signup(
  prevData: any,
  formData: FormData,
): Promise<ActionResult> {
  const username = formData.get('username')

  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: 'Invalid username',
    }
  }
  // make sure the username isn't already taken
  const user = await prisma.user.findUnique({ where: { username } })
  if (user) {
    return { error: 'Username is already taken' }
  }

  const password = formData.get('password')
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Invalid password',
    }
  }
  const repeatPassword = formData.get('repeatPassword')
  if (password !== repeatPassword) {
    return {
      error: "Passwords don't match",
    }
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  })
  const newUser = await prisma.user.create({
    data: {
      username,
      passwordHash,
      firstName: '',
      lastName: '',
    },
  })

  const session = await lucia.createSession(newUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  return redirect('/')
}

interface ActionResult {
  error: string
}
