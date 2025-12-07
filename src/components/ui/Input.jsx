export default function Input({ className, placeholder, onChange, type = "text" }) {
    return (
        <input 
            type={type}
            className={`${className} w-full p-3 rounded-xl bg-primary text-white border border-gray-100 focus:outline-none`} 
            placeholder={placeholder} 
            onChange={onChange} 
        />
    )
}