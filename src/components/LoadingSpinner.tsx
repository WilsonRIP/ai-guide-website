export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}></div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <div className="w-16 h-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto mb-4"></div>
        <p className="text-[var(--foreground)]/70 font-medium">Loading AI Tools Guide...</p>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--border)] animate-pulse">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-2xl mr-5"></div>
        <div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
      <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
    </div>
  );
}