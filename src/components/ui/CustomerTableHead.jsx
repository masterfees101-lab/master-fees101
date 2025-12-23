import { PlusCircle } from "lucide-react";

function CustomerTableHead() {
  return (
    <thead className="bg-[#E7F9DE]  text-[#003630] sticky top-0 z-10">
      <tr>
        <th className="py-3 px-4 text-left w-10">
          <input type="checkbox" />
        </th>
        <th className="py-3 text-left text-[12px] text-[#003630]">Grade</th>
        <th className="py-3 text-left text-[12px] text-[#003630]">
          Student Name
        </th>
        <th className="py-3 text-left text-[12px] text-[#003630]">
          Student ID
        </th>
        <th className="py-3 px-12 text-[12px] text-center text-[#003630]">
          Balance
        </th>
        <th className="py-3 text-[12px] ml-9text-[#003630]">Status</th>
        <th className="py-3 align-middle flex justify-center">
          <PlusCircle color="#003630" />
        </th>
      </tr>
    </thead>
  );
}

export default CustomerTableHead;
