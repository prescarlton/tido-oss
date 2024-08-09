'use client'
import { signin } from '@/actions/signin'
import SubmitButton from '@/components/submit-button'
import {
  Alert,
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import { useFormState } from 'react-dom'

export default function SigninPage() {
  const [formState, formAction] = useFormState(signin, {
    error: '',
  })
  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        New around here?{' '}
        <Anchor size="sm" component={Link} href="/signup">
          Create an account
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
          <Group justify="space-between" mt="lg">
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <SubmitButton fullWidth mt="xl">
            Sign in
          </SubmitButton>
        </Paper>
      </form>
    </Container>
  )
}
