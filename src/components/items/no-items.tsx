'use client'

import { SquareCheckBig } from 'lucide-react'
import EmptyState from '../common/empty-state'

export default function NoItems() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <EmptyState
        title="Items"
        description="Items are the building blocks of your project. Create a few, track their progress, add attachments, set due dates, and start getting stuff done."
        icon={<SquareCheckBig className="text-gray-500 -ml-1" size={64} />}
        cta={{
          label: 'Create Item',
          onClick: () => {
            console.log('Create Item')
          },
        }}
      />
    </div>
  )
}
