import getProjectByCode from '@/actions/projects/get-project-by-code'
import { Button, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

interface ProjectDetailsProps {
  code: string
}

export default async function ProjectDetails({ code }: ProjectDetailsProps) {
  const project = await getProjectByCode(code)
  return (
    <Flex direction="column" align="center" mt={64}>
      <Stack w="70%" gap="xl">
        <Stack>
          <Stack gap={0}>
            <Title size="h2">{project.name}</Title>
            <Text c="dimmed">Add a description</Text>
          </Stack>
          <Group>
            <Text>Resources</Text>
            <Button
              variant="subtle"
              color="gray"
              leftSection={<IconPlus size={12} />}
              size="xs"
            >
              Add a Resource
            </Button>
          </Group>
        </Stack>
        <Divider />
        <Stack>
          <Title size="h3">In-progress Items</Title>
          <Text c="dimmed">No in-progress items</Text>
        </Stack>
        <Divider />
        <Stack>
          <Title size="h3">Recent Activity</Title>
          <Text c="dimmed">No recent activity</Text>
        </Stack>
      </Stack>
    </Flex>
  )
}
