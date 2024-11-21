import { boolean, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core'
import { enumToPgEnum } from '../util'
import { ItemStatusGroup } from '@/types'
import { project } from '.'
export const itemStatusGroup = pgEnum(
  'item_status_group',
  enumToPgEnum(ItemStatusGroup),
)
const itemStatus = pgTable('item_statuses', {
  id: varchar({ length: 36 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  group: itemStatusGroup('group').notNull(),
  default: boolean().notNull().default(false),
  projectId: varchar({ length: 36 })
    .notNull()
    .references(() => project.id),
})

export default itemStatus
