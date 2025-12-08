export default function Input({ className, placeholder, onChange, type = "text" }) {
    return (
        <input 
            type={type}
            className={`${className} w-full`} 
            placeholder={placeholder} 
            onChange={onChange} 
        />
    )
}