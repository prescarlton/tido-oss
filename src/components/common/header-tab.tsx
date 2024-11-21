'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

export default function HeaderTab({
  name,
  href,
}: {
  name: string
  href: string
}) {
  const pathname = usePathname()
  const isActive = pathname.endsWith(href)
  return (
    <Link href={href}>
      <Button size="sm" variant={isActive ? 'secondary' : 'outline'}>
        {name}
      </Button>
    </Link>
  )
}
