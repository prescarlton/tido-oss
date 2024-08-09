'use client'
import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function ProjectTabs() {
  const { slug } = useParams()
  const pathname = usePathname()
  return (
    <Group gap={4}>
      <Button
        size="xs"
        variant={pathname === `/projects/${slug}` ? 'filled' : 'subtle'}
        color="dark"
        component={Link}
        href={`/projects/${slug}`}
        py={2}
      >
        Overview
      </Button>
      <Button
        size="xs"
        variant={
          pathname === `/projects/${slug}/resources` ? 'filled' : 'subtle'
        }
        color="dark"
        component={Link}
        href={`/projects/${slug}/resources`}
        py={2}
      >
        Resources
      </Button>
      <Button
        size="xs"
        variant={pathname === `/projects/${slug}/items` ? 'filled' : 'subtle'}
        color="dark"
        component={Link}
        href={`/projects/${slug}/items`}
        py={2}
      >
        Items
      </Button>
    </Group>
  )
}
