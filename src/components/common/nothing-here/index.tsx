import { Button, Group, Stack, Text } from '@mantine/core'
import { Folder, LucideProps } from 'lucide-react'
import classes from './styles.module.scss'
import { ForwardRefExoticComponent } from 'react'

interface NothingHereProps {
  title: string
  description?: string
  Icon?: ForwardRefExoticComponent<LucideProps>
}

export default function NothingHere({
  title,
  description = "There's nothing here yet.",
  Icon = Folder,
}: NothingHereProps) {
  return (
    <Group className={classes.container}>
      <Icon size={120} strokeWidth={1} className={classes.icon} />
      <Stack gap={2} align="start" w={200}>
        <Text c="dimmed">{title}</Text>
        <Text size="sm">{description}</Text>
        <Button size="xs" mt="sm">
          Action
        </Button>
      </Stack>
    </Group>
  )
}
