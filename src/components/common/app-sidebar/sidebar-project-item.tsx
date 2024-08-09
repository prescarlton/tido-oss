'use client'
import { UnstyledButton } from '@mantine/core'

import styles from './styles.module.scss'
import { Project } from '@prisma/client'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarProjectItemProps {
  project: Project
}

const SidebarProjectItem = ({ project }: SidebarProjectItemProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const active = pathname.includes(project.slug.toString()) || undefined

  const handleClick = () => {
    router.push(`/projects/${project.slug}`)
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      className={styles.sidebarProjectItem}
      data-active={active}
    >
      {project.name}
    </UnstyledButton>
  )
}

export default SidebarProjectItem
