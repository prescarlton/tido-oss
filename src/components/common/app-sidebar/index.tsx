import { AppShellNavbar } from '@mantine/core'

import classes from './styles.module.scss'
import MainLinks from './main-links'
import SidebarProjects from './sidebar-projects'
import WorkspaceSwitcher from './workspace-switcher'
import UserMenu from '@/components/common/user-menu'

const Sidebar = () => {
  return (
    <AppShellNavbar className={classes.navbar}>
      <WorkspaceSwitcher />
      <MainLinks />
      <SidebarProjects />
      <UserMenu />
    </AppShellNavbar>
  )
}
export default Sidebar
