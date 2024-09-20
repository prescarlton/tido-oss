'use client'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import classes from './styles.module.scss'

export default function ProjectTabs() {
  const { code } = useParams()
  const pathname = usePathname()

  const tabs = [
    {
      label: 'Overview',
      active: pathname === `/projects/${code}`,
      href: `/projects/${code}`,
    },
    {
      label: 'Items',
      active: pathname === `/projects/${code}/items`,
      href: `/projects/${code}/items`,
    },
    {
      label: 'Resources',
      active: pathname === `/projects/${code}/resources`,
      href: `/projects/${code}/resources`,
    },
  ]

  return (
    <Group gap={4}>
      {tabs.map((tab) => (
        <Button
          size="xs"
          data-active={tab.active}
          component={Link}
          href={tab.href}
          className={classes.tab}
          key={tab.label}
        >
          {tab.label}
        </Button>
      ))}
    </Group>
  )
}
