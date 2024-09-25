'use client'
import { ActionIcon, Box, Checkbox, Flex, Group, Text } from '@mantine/core'
import { Item, ItemStatus } from '@prisma/client'
import classes from './styles.module.scss'
import { Plus } from 'lucide-react'
import { useDisclosure } from '@mantine/hooks'
import CreateItemModal from '../create-item-modal'

interface ItemsTableProps {
  itemStatuses: (ItemStatus & { Items: Item[] })[]
  projectCode: string
}

const ItemsTable = ({ itemStatuses, projectCode }: ItemsTableProps) => {
  const [opened, { close, open }] = useDisclosure()
  return (
    <Flex className={classes.tableBody} direction="column">
      {itemStatuses.map((status) => (
        <Flex key={status.id} direction="column">
          <Group className={classes.statusHeader}>
            <Group className={classes.tableCell} flex={1} gap={'xs'}>
              <Text size="sm" fw="bold">
                {status.name}
              </Text>
              <Text size="sm" c="dimmed">
                {status.Items.length}
              </Text>
            </Group>
            <Group className={classes.tableCell}>
              <ActionIcon
                variant="subtle"
                size="sm"
                color="dark"
                onClick={open}
              >
                <Plus />
              </ActionIcon>
            </Group>
          </Group>
          {status.Items.map((item) => (
            <Group key={item.id} className={classes.tableRow}>
              <Box className={classes.tableCell}>
                <Checkbox size="xs" />
              </Box>
              <Box className={classes.tableCell}>
                <Text size="sm" c="dimmed">
                  {projectCode}-{item.code}
                </Text>
              </Box>
              <Box className={classes.tableCell} flex={1}>
                <Text size="sm">{item.name}</Text>
              </Box>
            </Group>
          ))}
        </Flex>
      ))}
      <CreateItemModal opened={opened} onClose={close} />
    </Flex>
  )
}
export default ItemsTable
