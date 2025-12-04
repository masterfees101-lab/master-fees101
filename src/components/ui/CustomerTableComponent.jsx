import React from "react";
import {
  FilterIcon,
  Plus,
  PlusCircle,
  Search,
  SearchCheckIcon,
  SortAscIcon,
  SortDesc,
  SortDescIcon,
  UploadIcon,
} from "lucide-react";

export default function CustomersTable() {
  const rows = Array.from({ length: 50 }).map((_, i) => ({
    grade: "Reception",
    name: "Jacob Banda",
    id: "203437192",
    balance: "-",
    status: "Status",
  }));

  const tabs = [
    "All",
    "Baby Class",
    "Reception",
    "Grade 1A",
    "Grade 1B",
    "Grade 2A",
    "Grade 2B",
  ];

  return (
    <div className="p-6 w-full overflow-scroll thin-scrollbar">
      <h1 className="text-2xl font-semibold mb-6">Customers</h1>

      {/* Search + Actions */}
      <div className="flex items-center justify-between mb-4 ">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center font-semibold gap-4 px-4 py-2 border border-gray-300 rounded-xl text-[12px]">
            <span>
              <UploadIcon />
            </span>
            Import/Export
          </button>

          <button className="px-4 py-2 gap-4 font-bold flex justify-end items-center bg-[#5DFCAF] text-[#003049] rounded-xl text-[12px]">
            <span>
              <Plus />
            </span>
            New User
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between mt-8">
        <div className="flex gap-8 items-center w-[60%]  mb-4 text-[12px] ">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`pb-2 w-[20%] ${
                i === 0
                  ? "border-b-3 border-[#5DFCAF] font-medium"
                  : "text-gray-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-5">
          <SearchCheckIcon size={18} />
          <FilterIcon size={18} />
          <SortDescIcon size={18} />
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#CBD2E0] rounded-md overflow-hidden max-h-[400px] overflow-y-auto hover:overflow-y-scroll thin-scrollbar">
        <table className="w-full text-sm">
          <thead className="bg-[#F6F7F9] text-gray-600 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-left w-10">
                <input type="checkbox" />
              </th>
              <th className="py-3 text-left text-[12px] text-[#B2BBCC]">
                Grade
              </th>
              <th className="py-3 text-left text-[12px] text-[#B2BBCC]">
                Student Name
              </th>
              <th className="py-3 text-left text-[12px] text-[#B2BBCC]">
                Student ID
              </th>
              <th className="py-3 px-12 text-[12px] text-center text-[#B2BBCC]">
                Balance
              </th>
              <th className="py-3 text-[12px] ml-9 text-[#B2BBCC]">Status</th>
              <th className="py-3 align-middle flex justify-center">
                <PlusCircle color="#B2BBCC" />
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-[#CBD2E0] text-[#000000]">
                <td className="py-3 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-3 text-[12px]">{r.grade}</td>
                <td className="py-3 text-[12px]">{r.name}</td>
                <td className="py-3 text-[12px]">{r.id}</td>
                <td className="py-3 text-[12px] text-center w-2/4 px-12">
                  {r.balance}
                </td>
                <td className="py-3 text-[12px] text-center">{r.status}</td>
                <td className="py-3 text-[12px] flex justify-center">›</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="border rounded-lg px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>of 140 rows</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-2">«</button>
          <button className="px-4.5 py-3 bg-[#003049] text-white rounded-full">
            1
          </button>
          <button className="px-2">2</button>
          <button className="px-2">3</button>
          <span>…</span>
          <button className="px-2">10</button>
          <button className="px-2">»</button>
        </div>
      </div>
    </div>
  );
}
