import { Card } from '@/core/components/ui/card'
import { Skeleton } from '@/core/components/ui/skeleton'

export const StatsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Card key={index} className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10">
        <div className="flex justify-center mb-6">
          <Skeleton className="h-16 w-16 rounded-full bg-white/20" />
        </div>
        <Skeleton className="h-12 w-20 mx-auto mb-3 bg-white/20" />
        <Skeleton className="h-6 w-32 mx-auto mb-2 bg-white/20" />
        <Skeleton className="h-4 w-40 mx-auto bg-white/20" />
      </Card>
    ))}
  </div>
)
