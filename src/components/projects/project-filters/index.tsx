import { ActionIcon, Box, Button, Group, Input } from '@mantine/core'
import classes from './styles.module.scss'
import { ArrowRight, ListFilter } from 'lucide-react'

const ProjectFilters = () => {
  return (
    <Box className={classes.container}>
      <Group>
        <Button
          leftSection={<ListFilter size={16} />}
          size="xs"
          variant="subtle"
          color="gray"
          fw="normal"
        >
          Filters
        </Button>
        <Input
          placeholder="Search"
          size="xs"
          rightSection={
            <ActionIcon variant="subtle" color="gray" radius="xl" size="sm">
              <ArrowRight />
            </ActionIcon>
          }
        />
      </Group>
    </Box>
  )
}
export default ProjectFilters
