import { ActionIcon, Box, Flex, Group, Text } from '@mantine/core'
import { Project } from '@prisma/client'
import classes from './styles.module.scss'
import { Star } from 'lucide-react'
import Link from 'next/link'

interface ProjectsTableProps {
  projects: Project[]
}

const ProjectsTable = ({ projects }: ProjectsTableProps) => {
  return (
    <div className={classes.container}>
      <Flex className={classes.table} direction="column">
        <Group className={classes.tableHeader}>
          <Box className={classes.tableCell} flex={3}>
            <Text size="xs">Name</Text>
          </Box>
          <Box className={classes.tableCell} flex={1}>
            <Text size="xs">Slug</Text>
          </Box>
          <Box className={classes.tableCell} flex={1}>
            <Text size="xs">Key</Text>
          </Box>
        </Group>
        <Flex className={classes.tableBody} direction="column">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id}>
              <Group key={project.id} className={classes.tableRow}>
                <Box className={classes.tableCell} flex={3}>
                  <Group gap="sm">
                    <Text size="sm">{project.name}</Text>
                    <ActionIcon
                      className={classes.favoriteIcon}
                      variant="subtle"
                      color="dark"
                    >
                      <Star size={14} />
                    </ActionIcon>
                  </Group>
                </Box>
                <Box className={classes.tableCell} flex={1}>
                  <Text size="sm">{project.slug}</Text>
                </Box>
                <Box className={classes.tableCell} flex={1}>
                  <Text size="sm">PROJ</Text>
                </Box>
              </Group>
            </Link>
          ))}
        </Flex>
      </Flex>
    </div>
  )
}
export default ProjectsTable
