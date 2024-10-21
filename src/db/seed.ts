import { Table, getTableName, sql } from 'drizzle-orm'
import { DbInstance } from '@/db'
import * as schema from '@/db/schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { Resource } from 'sst'
import * as seeds from './seeds'

async function resetTable(db: DbInstance, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`),
  )
}

async function main() {
  for (const table of [schema.user, schema.session, schema.project]) {
    await resetTable(db, table)
  }
  // do the dang thing
  await seeds.user(db)
}
const databaseUrl = Resource.DatabaseUrl.value
const connection = postgres(databaseUrl)
const db = drizzle(connection, { schema })
main()
  .then(() => {
    console.log('seeded')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await connection.end()
  })
