import { Book, Home, Inbox } from 'lucide-react'

import UserDropdownMenu from '@/core/components/dashboard/user-dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/core/components/ui/sidebar'
import { APP_NAME } from '@/core/lib/constants'

//* LINKS DEL SIDEBAR
const items = [
  {
    title: 'Balance',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Transacciones',
    url: '/dashboard/transacciones',
    icon: Inbox,
  },
  {
    title: 'Mis Cursos',
    url: '/dashboard/mis-cursos',
    icon: Book,
  }
]

export default function DashboardSidebar () {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{APP_NAME}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserDropdownMenu />
      </SidebarFooter>
    </Sidebar>
  )
}
