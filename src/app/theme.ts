'use client'
import { MenuDropdown, createTheme } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  components: {
    MenuDropdown: MenuDropdown.extend({
      defaultProps: {
        style: (theme) => ({
          borderRadius: theme.radius.md,
        }),
      },
    }),
  },
})
