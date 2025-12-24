import "@styles/spinner.css";

/**
 * A beautiful, animated spinner component for loading states.
 * Perfect for React Query's isLoading state.
 *
 * @param {Object} props
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="md"] - Size of the spinner
 * @param {string} [props.label] - Optional accessible label for screen readers
 * @param {boolean} [props.fullScreen] - Centers the spinner in the full viewport
 */
function Spinner({ size = "md", label = "Loading...", fullScreen = false }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const spinner = (
    <div
      className="spinner-container mx-auto
 p-10"
      role="status"
      aria-label={label}
    >
      <div className={`spinner ${sizeClasses[size]}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring spinner-ring-2"></div>
        <div className="spinner-dot"></div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#003630]/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Spinner;
