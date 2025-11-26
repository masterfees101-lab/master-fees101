export default function Label ({ children, className }) {
    return (
        <label className={`${className} block text-white font-medium mb-2`}>{children}</label>
    )
}