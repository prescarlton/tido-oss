import NothingHere from '@/components/common/nothing-here'
import PageHeader from '@/components/common/page-header'
import { Flex } from '@mantine/core'
import { LayoutDashboard } from 'lucide-react'

export default function Dashboard() {
  return (
    <Flex direction="column">
      <PageHeader title="Dashboard" />
      <NothingHere title="Dashboard" Icon={LayoutDashboard} />
    </Flex>
  )
}
