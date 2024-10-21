import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function Default404() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground">
          {`We couldn't find the page you're looking for. It might have been moved
          or doesn't exist.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/" passHref className="flex-1">
            <Button className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <Link href="/support" passHref className="flex-1">
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
