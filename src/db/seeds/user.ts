import { hashSync } from '@node-rs/argon2'
import { user } from '@/db/schema'
import { DbInstance } from '..'
const passwordHash = hashSync('password')

const users = [
  {
    username: 'preston',
    firstName: 'Preston',
    lastName: 'Carlton',
    passwordHash,
  },
]

export default async function seed(db: DbInstance) {
  await db.insert(user).values(users)
}
