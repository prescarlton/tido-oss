import { rem } from '@mantine/core'
import { ComponentPropsWithoutRef } from 'react'

interface AppIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string
}

const AppIcon = ({ size, style, ...other }: AppIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...other}
    >
      <rect
        rx="8"
        fill="white"
        style={{ width: rem(size), height: rem(size) }}
      />
      <path
        d="M12.9078 6.168H17.7398V10.04H22.1558V13.592H17.7398V21.464C17.7398 22.712 18.3798 23.416 19.5958 23.416H22.1878V27H18.5718C14.8278 27 12.9078 25.144 12.9078 21.464V13.592H10.1558V10.04H12.9078V6.168Z"
        fill="#4C6EF5"
      />
    </svg>
  )
}
export default AppIcon
