import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const activities = []

export default function RecentActivity() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-secondary-foreground text-center mt-8">
            No recent activity.
          </p>
        ) : (
          <ul className="space-y-4">
            {activities.map((item) => (
              <li className="flex items-center space-x-4" key={item.id}>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={item.user.avatar} alt="Avatar" />
                  <AvatarFallback>
                    {item.user.firstName[0]}
                    {item.user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.user.firstName} {item.user.lastName} {item.action}
                  </p>
                  <p className="text-sm text-gray-500">{item.task}</p>
                </div>
                <span className="text-sm text-gray-500">{item.time}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
