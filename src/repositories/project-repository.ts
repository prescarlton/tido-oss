import { DbInstance } from '@/db'
import {
  project as ProjectTable,
  projectUser as ProjectUserTable,
} from '@/db/schema'
import { takeUnique } from '@/db/util'
import { Project } from '@/types'
import { eq } from 'drizzle-orm'

export function createProjectRepository({
  db,
  project,
  projectUser,
}: {
  db: DbInstance
  project: typeof ProjectTable
  projectUser: typeof ProjectUserTable
}) {
  return {
    listProjects: async () => {
      return db.select().from(project)
    },
    listProjectsByUserId: async (userId: string): Promise<Project[]> => {
      const rawData = await db
        .select()
        .from(project)
        .leftJoin(projectUser, eq(project.id, projectUser.projectId))
        .where(eq(projectUser.userId, userId))
      return rawData.map((row) => ({ ...row.projects }))
    },
    getProjectById: async (id: string): Promise<Project> => {
      return db
        .selectDistinct()
        .from(project)
        .where(eq(project.id, id))
        .then(takeUnique)
    },
    getProjectByCode: async (code: string): Promise<Project> => {
      return db
        .selectDistinct()
        .from(project)
        .where(eq(project.code, code))
        .then(takeUnique)
    },
    getProjectByName: async (name: string) => {
      return db
        .selectDistinct()
        .from(project)
        .where(eq(project.name, name))
        .then(takeUnique)
    },
    quickCreateProject: async ({
      name,
      code,
      userId,
    }: {
      name: string
      code: string
      userId: string
    }): Promise<Project> => {
      // create project
      const newProject = await db
        .insert(project)
        .values({ name, code })
        .returning({
          id: project.id,
          name: project.name,
          code: project.code,
          description: project.description,
          created: project.created,
          updated: project.updated,
        })
        .then(takeUnique)
      console.log('userId', userId)
      // add user to project
      await db.insert(projectUser).values({
        userId,
        projectId: newProject.id,
      })
      return newProject
    },
  }
}

export type ProjectRepository = ReturnType<typeof createProjectRepository>
