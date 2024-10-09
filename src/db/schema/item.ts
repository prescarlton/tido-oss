import { createId } from '@paralleldrive/cuid2'
import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { project } from '.'

const item = pgTable('items', {
  id: varchar({ length: 36 })
    .primaryKey()
    .$default(() => createId()),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  projectId: varchar({ length: 36 })
    .notNull()
    .references(() => project.id, {
      onDelete: 'cascade',
    }),
})

export default item
