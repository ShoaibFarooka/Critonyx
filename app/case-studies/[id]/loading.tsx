export default function Loading() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="animate-pulse">
        <div className="h-8 bg-muted/50 rounded w-1/3 mb-4"></div>
        <div className="h-12 bg-muted/50 rounded w-2/3 mb-8"></div>
        <div className="h-6 bg-muted/50 rounded w-full mb-4"></div>
        <div className="h-6 bg-muted/50 rounded w-full mb-12"></div>

        <div className="h-80 bg-muted/50 rounded w-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="h-60 bg-muted/50 rounded w-full mb-6"></div>
            <div className="h-40 bg-muted/50 rounded w-full"></div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-8 bg-muted/50 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-3/4 mb-8"></div>

            <div className="h-8 bg-muted/50 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-3/4 mb-8"></div>

            <div className="h-8 bg-muted/50 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-muted/50 rounded w-3/4 mb-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
