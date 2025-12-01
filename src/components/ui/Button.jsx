export default function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`flex items-center justify-center font-semibold rounded-xl  
        shadow-[0_3px_2px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.8)] hover:scale-[1.01] transition-all duration-150 disabled:opacity-50 disabled:hover-none disabled:border-none disabled:cursor-not-allowed w-[340px] h-[47px]
        ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}