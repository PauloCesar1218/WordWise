export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 min-h-[280px] animate-pulse"
        >
          <div className="h-5 w-20 bg-slate-700/50 rounded-full mb-4" />
          <div className="h-9 w-40 bg-slate-700/50 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-4 bg-slate-700/50 rounded w-full" />
            <div className="h-4 bg-slate-700/50 rounded w-5/6" />
            <div className="h-4 bg-slate-700/50 rounded w-4/6" />
          </div>
        </div>
      ))}
    </div>
  )
}
