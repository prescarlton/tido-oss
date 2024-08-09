import NothingHere from '@/components/common/nothing-here'
import PageHeader from '@/components/common/page-header'
import { Flex } from '@mantine/core'
import { SquareCheckBig } from 'lucide-react'

export default function MyTasksPage() {
  return (
    <Flex direction="column">
      <PageHeader title="My Tasks" />
      <NothingHere
        title="My Tasks"
        description="There are no open tasks assigned to you."
        Icon={SquareCheckBig}
      />
    </Flex>
  )
}
