import { drizzle } from 'drizzle-orm/postgres-js'
import { type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema' // where our db tables are defined
import { Resource } from 'sst'

declare global {
  // eslint-disable-next-line no-var -- only var works here
  var db: PostgresJsDatabase<typeof schema> | undefined
}

let db: PostgresJsDatabase<typeof schema>
const databaseUrl = Resource.DatabaseUrl.value
if (process.env.NODE_ENV === 'production') {
  const client = postgres(databaseUrl)

  db = drizzle(client, {
    schema,
  })
} else {
  if (!global.db) {
    const client = postgres(databaseUrl)

    global.db = drizzle(client, {
      schema,
    })
  }

  db = global.db
}

type DbInstance = typeof db

export default db
export type { DbInstance }
