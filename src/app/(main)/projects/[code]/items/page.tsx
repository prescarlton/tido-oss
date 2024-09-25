import listItemsByProjectCode from '@/actions/projects/items/list-items-by-project-code'
import ItemsTable from '@/components/projects/items/items-table'
import { Flex } from '@mantine/core'

interface ProjectItemsPageProps {
  params: {
    code: string
  }
}

export default async function ProjectItemsPage({
  params,
}: ProjectItemsPageProps) {
  const items = await listItemsByProjectCode(params.code)

  return (
    <Flex direction="column">
      <ItemsTable
        itemStatuses={items}
        projectCode={params.code.toUpperCase()}
      />
    </Flex>
  )
}
