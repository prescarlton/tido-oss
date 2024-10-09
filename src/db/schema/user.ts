import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

const user = pgTable('users', {
  id: varchar({ length: 36 })
    .primaryKey()
    .$default(() => createId()),
  name: varchar({ length: 255 }),
  username: varchar({ length: 255 }).unique(),
  passwordHash: text('password_hash'),
  created: timestamp('created').defaultNow(),
  updated: timestamp('updated')
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export default user
