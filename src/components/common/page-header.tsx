import { ChevronRight } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '../ui/breadcrumb'
import { Separator } from '../ui/separator'
import { SidebarTrigger } from '../ui/sidebar'
import NewItemDialog from './new-item-dialog'
import HeaderTab from './header-tab'
import { Fragment } from 'react'

export default function PageHeader({
  breadcrumbs,
  tabs,
}: {
  breadcrumbs?: { name: string; href: string }[]
  tabs?: { name: string; href: string }[]
}) {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between gap-2 px-2 border-b border-b-bottom">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs &&
              breadcrumbs.map(({ name, href }) => (
                <Fragment key={name}>
                  <ChevronRight className="h-4 w-4" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              ))}
          </BreadcrumbList>
        </Breadcrumb>
        {tabs && (
          <>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <HeaderTab key={tab.name} {...tab} />
              ))}
            </div>
          </>
        )}
      </div>
      <NewItemDialog />
    </header>
  )
}
