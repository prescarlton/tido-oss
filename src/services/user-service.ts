import { UserRepository } from '@/repositories/user-repository'
export function createUserService({
  userRepository,
}: {
  userRepository: UserRepository
}) {
  return {
    getUserById: (id: string) => {
      return userRepository.getUserById(id)
    },
    getUserByUsername: (username: string) => {
      return userRepository.getUserByUsername(username)
    },
    listUsers: async () => {
      return userRepository.listUsers()
    },
  }
}

export type UserService = ReturnType<typeof createUserService>
