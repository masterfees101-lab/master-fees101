import { AlertCircle, RefreshCw } from "lucide-react";

/**
 * Error display component for failed data fetches.
 * Perfect for React Query's isError state.
 *
 * @param {Object} props
 * @param {string} [props.title="Something went wrong"] - Error title
 * @param {string} [props.message] - Optional detailed error message
 * @param {function} [props.onRetry] - Optional retry callback (e.g., refetch from React Query)
 */
function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn't load the data. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      {/* Animated error icon with glow */}
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-red-500/20"></div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30">
          <AlertCircle className="h-8 w-8 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Error text */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="max-w-sm text-sm text-gray-500">{message}</p>
      </div>

      {/* Retry button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="group mt-2 flex items-center gap-2 rounded-lg bg-[var(--primary-color)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--primary-color)]/90 hover:shadow-lg hover:shadow-[var(--primary-color)]/25 active:scale-95"
        >
          <RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
