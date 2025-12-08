import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import ToolsCard from "../../components/ui/ToolsCard";
import { Search } from "lucide-react";
import { STATIC_INTEGRATIONS, STATIC_LABELS } from "../../utils/constants";

export default function Integrations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = STATIC_INTEGRATIONS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-white py-7 px-14 h-screen overflow-auto">   
    <h3 className="text-5xl text-primary-text font-semibold">Integrations</h3>   
      <p className="text-[#6E6E73] my-6 text-xl">
        Connect the tools your school already uses.
      </p>
      <div className="max-w-md ">
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg h-11 px-3">
          <Search className="text-gray-400 w-4 h-4" />
          <Input 
            type="text" 
            placeholder="Search integrations" 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-black border-0 outline-none focus:ring-0 w-full p-0"
          />
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mt-6 flex-wrap">
        <Button 
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
            activeFilter === "All"
              ? "bg-primary text-white border border-primary"
              : "border border-gray-300 text-primary hover:bg-gray-50"
          }`}
        >
          All
        </Button>
        {STATIC_LABELS.map((label) => (
          <Button 
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeFilter === label
                ? "bg-primary text-white border border-primary"
                : "border border-gray-300 text-primary hover:bg-gray-50"
            }`}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredIntegrations.map((item, index) => (
          <ToolsCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            icon={item.icon}
            onClick={() => console.log(`Connecting to ${item.title}`)}
          />
        ))}
      </div>

      {filteredIntegrations.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-gray-500">No integrations found</p>
        </div>
      )}
    </main>
  );
}
