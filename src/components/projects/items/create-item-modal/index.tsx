import {
  Button,
  Flex,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import classes from './styles.module.scss'

interface CreateItemModalProps {
  opened: boolean
  onClose: () => void
}

export default function CreateItemModal({
  opened,
  onClose,
}: CreateItemModalProps) {
  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      classNames={{ content: classes.modal, body: classes.body }}
      centered
    >
      <Flex direction="column" h="100%">
        <Flex direction="column" flex={1} className={classes.innerContent}>
          <Stack gap="xs">
            <Text size="sm" fw="bold">
              New Item
            </Text>
            <TextInput
              variant="subtle"
              placeholder="Item name"
              fw="bold"
              size="xl"
              classNames={{ input: classes.input }}
            />
            <Textarea
              variant="subtle"
              placeholder="Add a description"
              size="lg"
              classNames={{ input: classes.input }}
            />
          </Stack>
          <Group mt="auto" align="start">
            <Button size="compact-sm" color="dark">
              Status
            </Button>
          </Group>
        </Flex>
        <Group justify="end" className={classes.footer}>
          <Button size="compact-sm">Save</Button>
        </Group>
      </Flex>
    </Modal>
  )
}
