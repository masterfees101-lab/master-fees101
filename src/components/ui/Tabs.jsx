import SortFilterSearch from "./SortFilterSearch";
import { GRADE_TABS } from "@utils/constants";

const tabs = GRADE_TABS;

function Tabs() {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex gap-8 items-center w-[60%]  mb-4 text-[12px] ">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`pb-2 w-[20%] ${
              i === 0
                ? "border-b-3 border-[#95E36C] text-[#003630] font-medium"
                : "text-gray-500 font-medium"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <SortFilterSearch />
    </div>
  );
}

export default Tabs;
