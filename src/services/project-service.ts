import { ProjectRepository } from '@/repositories/project-repository'
import { Project } from '@/types'

export function createProjectService({
  projectRepository,
}: {
  projectRepository: ProjectRepository
}) {
  return {
    getProjectById(id: string): Promise<Project> {
      return projectRepository.getProjectById(id)
    },
    getProjectByCode(code: string): Promise<Project> {
      return projectRepository.getProjectByCode(code)
    },
    listProjectsByUserId(userId: string): Promise<Project[]> {
      return projectRepository.listProjectsByUserId(userId)
    },
    quickCreateProject(userId: string, name: string): Promise<Project> {
      // NOTE: is there a better way to generate the code?
      // if the project is multi-word, it will be the first character of each word.
      // if the project is single-word, it will be the first four characters of the word.
      const code =
        name.split(' ').length > 1
          ? name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .toUpperCase()
          : name.slice(0, 4).toUpperCase()

      return projectRepository.quickCreateProject({
        name,
        code,
        userId,
      })
    },
  }
}
