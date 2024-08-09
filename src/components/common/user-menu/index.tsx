import { lucia, validateRequest } from '@/auth'
import ColorSchemeSwitcher from './color-scheme-switcher'
import classes from './styles.module.scss'
import {
  Avatar,
  Button,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from '@mantine/core'
import { ActionResult } from 'next/dist/server/app-render/types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const UserMenu = async () => {
  const { user } = await validateRequest()
  return (
    <Menu closeOnItemClick={false} trigger="click" position="bottom-start">
      <MenuTarget>
        <Button
          variant="subtle"
          className={classes.menuTarget}
          styles={{
            inner: {
              justifyContent: 'start',
            },
          }}
          leftSection={
            <Avatar
              radius="sm"
              size={'sm'}
              style={{ cursor: 'pointer' }}
              color="primary"
            />
          }
        >
          {user?.username}
        </Button>
      </MenuTarget>
      <MenuDropdown>
        <ColorSchemeSwitcher />
        <MenuDivider />
        <MenuItem>Account Settings</MenuItem>
        <MenuDivider />
        <form action={logout}>
          <MenuItem type="submit">Log out</MenuItem>
        </form>
      </MenuDropdown>
    </Menu>
  )
}

export default UserMenu

export async function logout(): Promise<ActionResult> {
  'use server'
  const { session } = await validateRequest()
  if (!session) {
    return {
      error: 'Unauthorized',
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  return redirect('/signin')
}
