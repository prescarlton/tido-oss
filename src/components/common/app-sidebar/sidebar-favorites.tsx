'use client'
import {
  AppShell,
  Box,
  Collapse,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useState } from 'react'

import styles from './styles.module.scss'

const SidebarFavorites = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => setOpen((prev) => !prev)

  return (
    <AppShell.Section className={styles.section}>
      <UnstyledButton onClick={toggleCollapse} className={styles.sectionHeader}>
        <Group gap="xs">
          <Text size="sm" c="dimmed">
            Favorites
          </Text>
          {open ? <IconChevronUp size={12} /> : <IconChevronDown size={12} />}
        </Group>
      </UnstyledButton>
      <Collapse in={open}>
        <Box className={styles.sectionItemList}>
          <Text size="xs">You have no favorites.</Text>
        </Box>
      </Collapse>
    </AppShell.Section>
  )
}

export default SidebarFavorites
