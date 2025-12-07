import Button from "./Button";
import { ExternalLink } from "lucide-react";

export default function ToolsCard({ title, description, link, icon, onClick }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md bg-white w-full transition-shadow">
      {icon ? (
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-lime-bg rounded-lg text-2xl">
          {icon}
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4" />
      )}
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <p className="text-[#6E6E73] text-base my-3">{description}</p>
      <a 
        href={`https://${link}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#0066CC] text-sm flex items-center gap-1 hover:underline my-4"
      >
        {link}
        <ExternalLink size={14} />
      </a>
      <Button 
        onClick={onClick} 
        className="w-full text-base bg-lime-text text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Connect
      </Button>
    </div>
  );
}