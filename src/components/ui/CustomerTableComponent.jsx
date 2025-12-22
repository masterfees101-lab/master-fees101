import React, { useState } from "react";
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
import {
  CUSTOMER_TABLE_MOCK_ROWS,
  MOCK_CUSTOMER,
  GRADE_TABS,
} from "@utils/constants";
import SortFilterSearch from "./SortFilterSearch";
import { useCustomer } from "@/context/CustomerContext";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useGetStudents, useGetParentFromStudent } from "@/hooks/Students";
const tabs = GRADE_TABS;

export default function CustomersTable() {
  const { setView } = useCustomer();
  const [expandedRow, setExpandedRow] = useState(null);
  const { customerId } = useCustomer();
  //get useGetStudent and useGetParentFromStudent
  const {
    data: students,
    isPending: isStudentsLoading,
    error: studentsError,
  } = useGetStudents();

  // Fetch parent when a row is expanded
  const {
    data: parent,
    isPending: isParentLoading,
    error: parentError,
  } = useGetParentFromStudent(expandedRow);

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
          <button
            onClick={() => setView("import")}
            className="flex items-center font-semibold gap-4 px-4 py-2 border border-gray-300 rounded-xl text-[12px]"
          >
            <span>
              <UploadIcon />
            </span>
            Import/Export
          </button>

          <button className="px-4 py-2 gap-4 font-bold flex justify-between items-center bg-[#95E36C] text-[#003049] rounded-xl text-[12px]">
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

      {/* Table */}
      <div className="border border-[#003630] rounded-md overflow-hidden max-h-[400px] overflow-y-auto hover:overflow-y-scroll thin-scrollbar">
        <table className="w-full text-sm">
          <thead className="bg-[#E7F9DE]  text-[#003630] sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-left w-10">
                <input type="checkbox" />
              </th>
              <th className="py-3 text-left text-[12px] text-[#003630]">
                Grade
              </th>
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

          <tbody>
            {/* Showing students in the database */}
            {students?.map((student, i) => (
              <React.Fragment key={i}>
                <tr
                  onClick={() =>
                    setExpandedRow(
                      expandedRow === student.student_id
                        ? null
                        : student.student_id
                    )
                  }
                  className={`border-t border-[#CBD2E0] hover:bg-gray-50 text-[#000000] cursor-pointer ${
                    expandedRow === student.student_id ? "" : ""
                  }`}
                >
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="py-3 text-[12px]">{student.grade}</td>
                  <td className="py-3 text-[12px]">
                    {student.first_name + " " + student.last_name}
                  </td>
                  <td className="py-3 text-[12px]">
                    {student.student_id.split("-")[0]}
                  </td>
                  <td className="py-3 text-[12px] text-center w-2/4 px-12">
                    {student.balance}
                  </td>
                  <td className="py-3 text-[12px] text-center">{"Status"}</td>
                  <td className="py-3 text-[12px] flex justify-center">
                    {expandedRow === student.student_id ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </td>
                </tr>
                {expandedRow === student.student_id && (
                  <tr className=" rounded-2xl ">
                    <td colSpan="7" className="p-4  ">
                      <div className="p-6 border border-[#CBD2E0] bg-[#E7F9DE] rounded-2xl ">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-xs mb-4">
                            Pupil Details
                          </h3>
                        </div>

                        <div className="grid grid-cols-3 gap-y-4 gap-x-8 mb-6">
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              First Name
                            </p>
                            <p className="font-medium text-[12px]">
                              {student.first_name}
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Last Name
                            </p>
                            <p className="font-medium text-[12px]">
                              {student.last_name}
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Other Name
                            </p>
                            <p className="font-medium text-[12px]">-</p>
                          </div>

                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Grade
                            </p>
                            <p className="font-regular text-[12px]">
                              {student.grade}
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Balance Amount
                            </p>
                            <p className="font-regular text-[12px]">ZMW 0</p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Name of Guardian
                            </p>
                            <p className="font-regular text-[12px]">
                              {isParentLoading
                                ? "Loading..."
                                : parent
                                ? `${parent.first_name} ${parent.last_name}`
                                : "N/A"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Student Info
                            </p>
                            <p className="font-regular text-[12px]">
                              {student.student_id.split("-")[0]}
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Balance Due Date
                            </p>
                            <p className="font-regular text-[12px]">N/A</p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Email Address
                            </p>
                            <p className="font-regular text-[12px]">
                              {isParentLoading
                                ? "Loading..."
                                : parent?.email || "N/A"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Date of enrollment
                            </p>
                            <p className="font-regular text-[12px]">
                              28/02/2025
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              No. of settled balances
                            </p>
                            <p className="font-regular text-[12px]">N/A</p>
                          </div>
                          <div>
                            <p className="text-[8px] text-[#707479] mb-1">
                              Phone Number
                            </p>
                            <p className="font-regular text-[12px]">
                              {isParentLoading
                                ? "Loading..."
                                : parent?.phone_number || "N/A"}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end border-t border-[#CBD2E0] bg-white p-3 rounded-b-lg -mx-6 -mb-6 mt-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setView("details", r.id);
                            }}
                            className="text-sm font-semibold text-gray-700 hover:text-black"
                          >
                            View/Edit Details
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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
