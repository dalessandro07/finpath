import { Skeleton } from '@/core/components/ui/skeleton'

const BalanceCardSkeleton = () => (
  <div className="p-4 rounded-lg border">
    <Skeleton className="h-4 w-20 mb-2" />
    <Skeleton className="h-8 w-24" />
  </div>
)

const TransactionItemSkeleton = () => (
  <div className="flex items-center justify-between p-4 border rounded-lg">
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-3 w-12" />
    </div>
  </div>
)

export default function DashboardLoading () {
  return (
    <div className="w-full flex flex-col gap-5">
      {/* Header skeleton */}
      <header>
        <Skeleton className="h-8 w-32 mb-2" />
        <Skeleton className="h-4 w-48" />
      </header>

      {/* Balance cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BalanceCardSkeleton />
        <BalanceCardSkeleton />
        <BalanceCardSkeleton />
      </div>

      {/* Transactions section skeleton */}
      <section className="flex flex-col gap-4">
        <Skeleton className="h-6 w-32" />

        {/* Add transaction button skeleton */}
        <Skeleton className="h-10 w-40" />

        {/* Transactions list skeleton */}
        <div className="w-full flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <TransactionItemSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  )
}
