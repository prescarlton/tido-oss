import { session, user } from '@/db/schema'
import { createUserService } from './user-service'
import db from '@/db'
import { createAuthenticationService } from './authentication-service'
import { projectRepository, userRepository } from '@/repositories'
import { createProjectService } from './project-service'

export * from './user-service'
export * from './authentication-service'

export const userService = createUserService({ userRepository })
export const authenticationService = createAuthenticationService({
  db,
  session,
  userService,
})

export const projectService = createProjectService({
  projectRepository,
})
