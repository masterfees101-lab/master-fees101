export default function Input({ className, placeholder, onChange }) {
    return (
        <input className={`${className} w-full p-3 rounded-xl bg-[--color-primary] text-white border border-gray-100 focus:outline-none`} placeholder={placeholder} onChange={onChange} />
    )
}