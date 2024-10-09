import { session, user } from '@/db/schema'
import { createUserService } from './user-service'
import db from '@/db'
import { createAuthenticationService } from './authentication-service'

export * from './user-service'
export * from './authentication-service'

export const userService = createUserService({ db, user })
export const authenticationService = createAuthenticationService({
  db,
  session,
  userService,
})
