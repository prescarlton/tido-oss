'use client'
import { signup } from '@/actions/signup'
import SubmitButton from '@/components/submit-button'
import {
  Alert,
  Anchor,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import { useFormState } from 'react-dom'

export default function SignupPage() {
  const [formState, formAction] = useFormState(signup, {
    error: '',
  })

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome to tido.</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Been here before?{' '}
        <Anchor size="sm" component={Link} href="/signin">
          Sign in
        </Anchor>
      </Text>
      <form action={formAction}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {formState.error && (
            <Alert color="red" mb="xs">
              {formState.error}
            </Alert>
          )}
          <TextInput label="Username" placeholder="username" name="username" />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            name="password"
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Your password"
            mt="md"
            name="repeatPassword"
          />
          <SubmitButton fullWidth mt="xl">
            Sign up
          </SubmitButton>
        </Paper>
      </form>
    </Container>
  )
}
