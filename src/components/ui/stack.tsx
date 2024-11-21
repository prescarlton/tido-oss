import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface StackProps {
  children: ReactNode
  gap?: number
  className?: string
}
export default function Stack({ children, gap = 4, className }: StackProps) {
  return (
    <div className={cn(className, `flex flex-col gap-${gap}`)}>{children}</div>
  )
}
