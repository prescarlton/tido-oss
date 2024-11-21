'use client'
import { useState } from 'react'
import {
  Play,
  GitBranch,
  Zap,
  Repeat,
  Book,
  Rocket,
  Users,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { toast } from 'sonner'
import quickCreateProject from '@/actions/projects/quick-create-project'

export default function GettingStartedDialog() {
  const [projectName, setProjectName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCreateProject = async () => {
    setLoading(true)
    toast.promise(quickCreateProject({ name: projectName }), {
      success: 'Project created successfully',
      loading: 'Creating project...',
      error: 'Failed to create project',
      finally: () => setLoading(false),
    })
  }

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-5xl p-0 overflow-auto max-h-[90vh]"
        hideClose
      >
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Welcome to Tido!</h1>
            <p className="text-lg text-muted-foreground">
              {"We're stoked to have you here. Let's get rolling."}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Play,
                  title: 'Product Overview',
                  duration: '4:40',
                  type: 'PRODUCT DEMO',
                },
                {
                  icon: GitBranch,
                  title: 'Task Management',
                  duration: '1:40',
                  type: 'CORE FEATURES',
                },
                {
                  icon: Zap,
                  title: 'Agile Boards',
                  duration: '1:51',
                  type: 'CORE FEATURES',
                },
                {
                  icon: Repeat,
                  title: 'Sprints',
                  duration: '3:56',
                  type: 'CORE FEATURES',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-4 rounded-lg space-y-2 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-100 p-2 rounded">
                      <item.icon className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.type}
                    </p>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {item.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Get help</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Book, title: 'Documentation', type: 'LEARN IN DETAIL' },
                {
                  icon: Rocket,
                  title: 'Onboarding',
                  type: 'PRODUCT WALKTHROUGH',
                },
                {
                  icon: Users,
                  title: 'Community Forum',
                  type: 'LEARN WITH EXPERTS',
                },
                { icon: Layers, title: 'Tutorials', type: 'MASTER TIDO' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-4 rounded-lg space-y-2 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-100 p-2 rounded">
                      <item.icon className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.type}
                    </p>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Create a new project</h3>
            </div>
            <div className="flex space-x-4">
              <Input
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="flex-grow"
                autoFocus
              />
              <Button
                onClick={handleCreateProject}
                className="bg-blue-600 hover:bg-blue-700"
                loading={loading}
              >
                Create Project
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
