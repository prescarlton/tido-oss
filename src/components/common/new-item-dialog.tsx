'use client'
import { useState } from 'react'
import { PlusCircle, MoreHorizontal, User, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useParams } from 'next/navigation'

export default function NewItemDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { code } = useParams() as { code?: string }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Issue
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="flex flex-row items-center justify-between p-4 pb-0">
          <div className="flex items-center space-x-2">
            <DialogTitle className="text-sm">New Item</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4 p-4 py-0">
          <div>
            <Input
              id="issue-title"
              placeholder="Issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-semibold border-0 ring-0 px-0 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
              autoFocus
            />
          </div>
          <div>
            <Textarea
              id="issue-description"
              placeholder="Add description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] border-0 ring-0 px-0 placeholder:text-gray-400 resize-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              {code}
            </Button>
            <Button variant="outline" size="sm" disabled>
              Priority
            </Button>
            <Button variant="outline" size="sm" disabled className="gap-1">
              <User className="h-3 w-3" />
              Assignee
            </Button>
            <Button variant="outline" size="sm" disabled className="gap-1">
              <Calendar className="h-3 w-3" />
              Due date
            </Button>
            <Button variant="outline" size="sm" disabled>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center border-t-border border-t p-2">
          <Button type="submit" className="bg-primary">
            Create issue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
