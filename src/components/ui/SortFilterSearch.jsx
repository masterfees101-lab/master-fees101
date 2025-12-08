import { FilterIcon, SearchCheckIcon, SortDescIcon } from "lucide-react";

function SortFilterSearch() {
  return (
    <div className="flex gap-5">
      <SearchCheckIcon size={18} />
      <FilterIcon size={18} />
      <SortDescIcon size={18} />
    </div>
  );
}

export default SortFilterSearch;
