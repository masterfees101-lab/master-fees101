import verify from "../../assets/icons/verify.svg";

// Set appropriate background colors for the status cards
const typesStatus = {
    "Pending": "#95E36C",      // yellow
    "Completed": "#000000",    // Black
    "In Progress": "#60A5FA",  // blue
    "Verified": "#10B981",     // emerald
};

export default function StatusCard({ value, icon, bgColor }) {
    const backgroundColor = bgColor || typesStatus[value] || "#95E36C";
    
    return (
        <div className="inline-flex items-center gap-0.5 px-3 py-1 rounded-full" style={{ backgroundColor }}>
            <img src={icon || verify} alt={`${value} status icon`} className="w-4 h-4" />
            <p className="text-xs font-semibold text-gray-800">{value}</p>
        </div>
    );
}