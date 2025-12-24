import { Search } from "lucide-react";
import { useCustomer } from "@/context/CustomerContext";

function CustomerSearch() {
  const { searchQuery, setSearchQuery } = useCustomer();

  return (
    <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
      />
    </div>
  );
}

export default CustomerSearch;
