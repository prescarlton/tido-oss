'use client'

import {
  Flex,
  MantineColorScheme,
  SegmentedControl,
  useMantineColorScheme,
} from '@mantine/core'

const ColorSchemeSwitcher = () => {
  const { colorScheme, setColorScheme: setMantineColorScheme } =
    useMantineColorScheme()

  const setColorScheme = (val: 'dark' | 'light' | 'auto') => {
    setMantineColorScheme(val)
  }
  return (
    <Flex>
      <SegmentedControl
        data={['light', 'auto', 'dark']}
        value={colorScheme}
        onChange={(val) => setColorScheme(val as MantineColorScheme)}
      />
    </Flex>
  )
}
export default ColorSchemeSwitcher
