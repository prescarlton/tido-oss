import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { user } from '.'

const session = pgTable('sessions', {
  id: varchar('id', { length: 40 }).primaryKey(),
  userId: varchar('user_id', { length: 36 })
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at').notNull(),
})

export default session
