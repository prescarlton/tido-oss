import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '@/db/schema'

const databaseUrl = process.env.DATABASE_URL!

export const connection = postgres(databaseUrl)

declare const globalThis: {
  db: PostgresJsDatabase<typeof schema>
} & typeof global

const db = globalThis.db ?? drizzle(connection, { schema })

export type db = typeof db
export default db
