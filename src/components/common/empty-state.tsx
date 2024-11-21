import { ReactNode } from 'react'
import { Button } from '../ui/button'
import Group from '../ui/group'
import Stack from '../ui/stack'

interface EmptyStateProps {
  title: string
  description: string
  icon: ReactNode
  cta: {
    label: string
    onClick: () => void
  }
  secondaryCta?: {
    label: string
    onClick: () => void
  }
}

export default function EmptyState({
  title,
  description,
  icon,
  cta,
  secondaryCta,
}: EmptyStateProps) {
  return (
    <Stack className="w-96">
      {icon}
      <Stack gap={1}>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </Stack>
      <Group gap={1}>
        <Button onClick={cta.onClick} size="sm">
          {cta.label}
        </Button>
      </Group>
    </Stack>
  )
}
