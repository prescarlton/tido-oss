'use client'
import { AppShellSection, Box, Text, UnstyledButton } from '@mantine/core'
import {
  IconCheckbox,
  IconLayoutDashboard,
  IconSettings,
  IconStack,
} from '@tabler/icons-react'

import styles from './styles.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainLinks = () => {
  const pathname = usePathname()
  const links = [
    {
      label: 'Dashboard',
      icon: IconLayoutDashboard,
      path: '/',
    },
    {
      label: 'Projects',
      icon: IconStack,
      path: '/projects',
    },
    {
      label: 'My tasks',
      icon: IconCheckbox,
      path: '/my-tasks',
    },
    {
      label: 'Settings',
      icon: IconSettings,
      path: '/settings',
    },
  ]
  return (
    <AppShellSection className={styles.section}>
      <Box className={styles.mainLinks}>
        {links.map((link) => (
          <UnstyledButton
            key={link.label}
            className={styles.mainLink}
            component={Link}
            href={link.path}
            data-active={link.path === pathname}
          >
            <div className={styles.mainLinkInner}>
              <link.icon size={16} className={styles.mainLinkIcon} />
              <Text size="sm">{link.label}</Text>
            </div>
          </UnstyledButton>
        ))}
      </Box>
    </AppShellSection>
  )
}

export default MainLinks
