export default function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}