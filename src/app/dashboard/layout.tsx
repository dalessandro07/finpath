import DashboardSidebar from '@/core/components/dashboard/dashboard-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/core/components/ui/sidebar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full flex gap-2">
        <SidebarTrigger />
        <div className="w-full p-2 sm:p-5">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
