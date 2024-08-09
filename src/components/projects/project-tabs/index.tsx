'use client'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import classes from './styles.module.scss'

export default function ProjectTabs() {
  const { slug } = useParams()
  const pathname = usePathname()

  return (
    <Group gap={4}>
      <Button
        size="xs"
        data-active={pathname === `/projects/${slug}`}
        component={Link}
        href={`/projects/${slug}`}
        className={classes.tab}
      >
        Overview
      </Button>
      <Button
        size="xs"
        data-active={pathname === `/projects/${slug}/resources`}
        component={Link}
        href={`/projects/${slug}/resources`}
        className={classes.tab}
      >
        Resources
      </Button>
      <Button
        size="xs"
        data-active={pathname === `/projects/${slug}/items`}
        component={Link}
        href={`/projects/${slug}/items`}
        className={classes.tab}
      >
        Items
      </Button>
    </Group>
  )
}
