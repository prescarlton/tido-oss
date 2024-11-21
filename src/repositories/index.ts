import { project, user, projectUser } from '@/db/schema'
import { createProjectRepository } from './project-repository'
import db from '@/db'
import { createUserRepository } from './user-repository'
export const projectRepository = createProjectRepository({
  db,
  project,
  projectUser,
})

export const userRepository = createUserRepository({
  db,
  user,
})
