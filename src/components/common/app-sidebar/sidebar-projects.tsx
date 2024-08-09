import { AppShellSection, Box, Text } from '@mantine/core'

import styles from './styles.module.scss'
import listProjects from '@/actions/projects/list-projects'
import SidebarProjectItem from './sidebar-project-item'

const SidebarProjects = async () => {
  const projects = await listProjects()
  return (
    <AppShellSection className={styles.section}>
      <Text size="sm" c="dimmed" className={styles.sectionHeader}>
        Projects
      </Text>
      <Box className={styles.sectionItemList}>
        {projects.map((project) => (
          <SidebarProjectItem project={project} key={project.id} />
        ))}
      </Box>
    </AppShellSection>
  )
}

export default SidebarProjects
