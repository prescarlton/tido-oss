import { FileText, MessageSquare, PlusCircle, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create a Task
        </Button>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Find Task
        </Button>
        <Button variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Team Chat
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          View Reports
        </Button>
      </CardContent>
    </Card>
  )
}
