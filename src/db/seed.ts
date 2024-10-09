import { Table, getTableName, sql } from 'drizzle-orm'
import db, { connection, db as Db } from '@/db'
import * as schema from '@/db/schema'

async function resetTable(db: Db, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`),
  )
}

async function main() {
  for (const table of [schema.user, schema.session, schema.project]) {
    await resetTable(db, table)
  }
  // do the dang thing
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await connection.end()
  })
