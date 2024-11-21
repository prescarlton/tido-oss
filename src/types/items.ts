import { z } from 'zod'
export enum ItemStatusGroup {
  BACKLOG = 'backlog',
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  CANCELED = 'canceled',
}

export const createItemSchema = z.object({
  projectId: z.string().min(1, { message: 'Project ID is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
})

export type CreateItemPayload = z.infer<typeof createItemSchema>
