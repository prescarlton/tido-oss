import { Anchor, Breadcrumbs, Group, Text } from '@mantine/core'
import classes from './styles.module.scss'
import { ReactNode } from 'react'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'

interface Breadcrumb {
  title: string
  href: string
}

interface PageHeaderProps {
  title?: string
  breadcrumbs?: Breadcrumb[]
  primaryActions?: ReactNode
  secondaryActions?: ReactNode
}

export default function PageHeader({
  title,
  breadcrumbs,
  primaryActions,
  secondaryActions,
}: PageHeaderProps) {
  return (
    <nav className={classes.nav}>
      <Group justify="space-between" style={{ flex: 1 }}>
        <Group gap="sm">
          {title ? (
            <Text size="sm" fw="bold">
              {title}
            </Text>
          ) : (
            <Breadcrumbs separator={<IconChevronRight size={12} />} mr="lg">
              {breadcrumbs?.map((b) => (
                <Anchor
                  variant="subtle"
                  component={Link}
                  href={b.href}
                  key={b.href}
                  size="sm"
                  fw="bold"
                  c="dimmed"
                >
                  {b.title}
                </Anchor>
              ))}
            </Breadcrumbs>
          )}
          {primaryActions}
        </Group>
        {secondaryActions}
      </Group>
    </nav>
  )
}
