import { createId } from '@paralleldrive/cuid2'
import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

const project = pgTable('projects', {
  id: varchar({ length: 36 })
    .primaryKey()
    .$default(() => createId()),
  name: varchar({ length: 255 }),
  code: varchar({ length: 4 }),
  description: varchar({ length: 255 }),
  created: timestamp('created').defaultNow(),
  updated: timestamp('updated')
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export default project
