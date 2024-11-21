import { createId } from '@paralleldrive/cuid2'
import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

const project = pgTable('projects', {
  id: varchar({ length: 36 })
    .primaryKey()
    .$default(() => createId()),
  name: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 4 }).notNull(),
  description: varchar({ length: 255 }),
  created: timestamp('created').defaultNow().notNull(),
  updated: timestamp('updated')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
})

export default project
