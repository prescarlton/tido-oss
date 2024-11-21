import { pgTable, varchar } from 'drizzle-orm/pg-core'
import project from './project'
import user from './user'

const projectUser = pgTable('project_users', {
  projectId: varchar('project_id', { length: 36 }).references(
    () => project.id,
    { onDelete: 'cascade' },
  ),
  userId: varchar('user_id', { length: 36 }).references(() => user.id, {
    onDelete: 'cascade',
  }),
})

export default projectUser
