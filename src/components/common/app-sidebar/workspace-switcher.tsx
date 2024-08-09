import {
  Box,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
  UnstyledButton,
} from '@mantine/core'

import styles from './styles.module.scss'
import { IconChevronDown, IconSelector } from '@tabler/icons-react'

const WorkspaceSwitcher = () => {
  const options = [
    {
      value: 1,
      label: 'CODE/+/TRUST',
    },
    {
      value: 2,
      label: 'Personal Workspace',
    },
  ]

  return (
    <Menu>
      <MenuTarget>
        <UnstyledButton className={styles.workspaceSelect}>
          <Group gap="xs">
            <Box className={styles.workspaceLogo} />
            <Text size="sm" fw="bold">
              CODE/+/TRUST
            </Text>
          </Group>
          <IconChevronDown size={14} />
        </UnstyledButton>
      </MenuTarget>
      <MenuDropdown>
        {options.map((opt) => (
          <MenuItem key={opt.value}>
            <MenuLabel>{opt.label}</MenuLabel>
          </MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
}
export default WorkspaceSwitcher
