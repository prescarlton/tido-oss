'use client'
import { Button, ButtonProps } from '@mantine/core'
import { useFormStatus } from 'react-dom'

const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button loading={pending} {...props} type="submit">
      {props.children}
    </Button>
  )
}
export default SubmitButton
