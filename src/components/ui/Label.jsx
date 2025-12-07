export default function Label ({ children, className, htmlFor }) {
    return (
        <label htmlFor={htmlFor} className={`${className} block text-white font-medium mb-2`}>{children}</label>
    )
}