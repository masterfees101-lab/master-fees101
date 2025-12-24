import {
  FilterIcon,
  SearchCheckIcon,
  SortDescIcon,
  SortAscIcon,
} from "lucide-react";
import { useCustomer } from "@/context/CustomerContext";

function SortFilterSearch() {
  const { sortOrder, setSortOrder } = useCustomer();

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="flex gap-5">
      {/* <SearchCheckIcon size={18} /> */}
      {/* <FilterIcon size={18} /> */}
      <button
        onClick={toggleSort}
        className="focus:outline-none hover:bg-gray-100 p-1 rounded"
      >
        {sortOrder === "asc" ? (
          <SortAscIcon size={18} />
        ) : (
          <SortDescIcon size={18} />
        )}
      </button>
    </div>
  );
}

export default SortFilterSearch;
