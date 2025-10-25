import { Book, Calculator, Home, Inbox, User } from 'lucide-react'
import Link from 'next/link'

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
    title: 'Calculadora',
    url: '/dashboard/calculadora',
    icon: Calculator,
  },
  {
    title: 'Mis Cursos',
    url: '/dashboard/mis-cursos',
    icon: Book,
  },
  {
    title: 'Perfil',
    url: '/dashboard/perfil',
    icon: User,
  }
]

export default function DashboardSidebar () {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <Link href="/">{APP_NAME}</Link></SidebarGroupLabel>
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
