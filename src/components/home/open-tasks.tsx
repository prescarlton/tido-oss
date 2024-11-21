import { Clock } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const tasks = [
  {
    id: 1,
    title: 'Review project proposal',
    project: 'Project Alpha',
    dueDate: '2024-10-25',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Update client meeting notes',
    project: 'Project Beta',
    dueDate: '2024-10-26',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Prepare quarterly report',
    project: 'Project Gamma',
    dueDate: '2024-10-28',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'Team performance evaluations',
    project: 'HR Initiative',
    dueDate: '2024-10-30',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Finalize design mockups',
    project: 'Project Delta',
    dueDate: '2024-10-27',
    priority: 'High',
    status: 'Due This Week',
  },
  {
    id: 6,
    title: 'Code review for new feature',
    project: 'Project Alpha',
    dueDate: '2024-10-29',
    priority: 'Medium',
    status: 'Due This Week',
  },
  {
    id: 7,
    title: 'Update project timeline',
    project: 'Project Beta',
    dueDate: '2024-10-30',
    priority: 'Low',
    status: 'Due This Week',
  },
]
export default function OpenTasks() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-rose-500 bg-rose-50'
      case 'Medium':
        return 'text-amber-500 bg-amber-50'
      case 'Low':
        return 'text-emerald-500 bg-emerald-50'
      default:
        return 'text-slate-500 bg-slate-50'
    }
  }

  const TaskList = ({ tasks }: { tasks: any[] }) => (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {task.title}
            </p>
            <p className="text-sm text-gray-500 truncate">{task.project}</p>
          </div>
          <Badge
            variant="secondary"
            className={`${getPriorityColor(task.priority)} text-xs`}
          >
            {task.priority}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
            <p>{task.dueDate}</p>
          </div>
        </li>
      ))}
    </ul>
  )
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Your Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending Tasks</TabsTrigger>
            <TabsTrigger value="dueThisWeek">Due This Week</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <TaskList
              tasks={tasks.filter((task) => task.status === 'Pending')}
            />
          </TabsContent>
          <TabsContent value="dueThisWeek">
            <TaskList
              tasks={tasks.filter((task) => task.status === 'Due This Week')}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
