import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

const user = pgTable('users', {
  id: varchar({ length: 36 })
    .primaryKey()
    .$default(() => createId()),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).unique().notNull(),
  passwordHash: text('password_hash'),
  created: timestamp('created').defaultNow(),
  updated: timestamp('updated')
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export default user
