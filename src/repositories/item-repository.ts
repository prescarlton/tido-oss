import { DbInstance } from '@/db'
import { ItemTable } from '@/db/schema/item'

export function createItemRepository({
  db,
  item,
}: {
  db: DbInstance
  item: ItemTable
}) {
  return {
    createItem() {},
  }
}
