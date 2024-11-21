import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GroupProps {
  children: ReactNode
  gap?: number
  className?: string
}
export default function Group({ children, gap = 4, className }: GroupProps) {
  return (
    <div className={cn(className, `flex items-center gap-${gap}`)}>
      {children}
    </div>
  )
}
