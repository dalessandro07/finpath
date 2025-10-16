import DashboardSidebar from '@/core/components/dashboard/sidebar'
import { SidebarProvider, SidebarTrigger } from '@/core/components/ui/sidebar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
