import React from "react";
import {
  FilterIcon,
  Printer,
  Search,
  Settings2,
  SlidersHorizontal,
} from "lucide-react";
import {
  useGetParentFromStudent,
  useGetSpecificStudent,
} from "../../hooks/Students";
import Spinner from "./Spinner";
export default function CustomerDetails({ customerId, onBack }) {
  const { data: fetchedStudent } = useGetSpecificStudent(customerId);
  const student = fetchedStudent?.[0];
  const {
    data: parent,
    isPending: isParentLoading,
    error: parentError,
  } = useGetParentFromStudent(customerId);
  console.log(student);
  return (
    <div className="bg-white p-6 h-full overflow-y-auto thin-scrollbar">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={onBack} className="text-[#003630] font-bold text-xl">
          {"<"}
        </button>
        <h1 className="text-xl font-bold text-[#003630]">Customer Details</h1>
      </div>

      <div className="flex gap-6 mb-8">
        {/* Left Panel: Search */}
        {/* <div className="w-1/4 min-w-[250px] border border-gray-200 rounded-lg p-4 h-fit">
          <h3 className="text-sm font-semibold mb-2">
            Search by name or Student ID
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm"
            />
          </div>
        </div> */}

        {/* Right Panel: Details and Transactions */}
        {student && parent ? (
          <div className="flex-1 border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold">
                    {student?.first_name} {student?.last_name}
                  </h2>
                  <span className="bg-[#B6F09C] text-[#003630] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#003630]"></div>{" "}
                    Actively Enrolled
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs text-gray-500">
                  <div>
                    <p className="mb-0.5">Grade</p>
                    <p className="font-semibold text-black">{student.grade}</p>
                  </div>
                  <div>
                    <p className="mb-0.5">Name of Guardian</p>
                    <p className="font-semibold text-black">
                      {parent.first_name} {parent.last_name}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5">Student Number</p>
                    <p className="font-semibold text-black">
                      {student.student_id.split("-")[0]}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5">Email Address</p>
                    <p className="font-semibold text-black">{parent.email}</p>
                  </div>
                  <div>
                    <p className="mb-0.5">Date of enrollment</p>
                    <p className="font-semibold text-black">
                      {student.date_of_enrollment}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5">Phone Number</p>
                    <p className="font-semibold text-black">
                      {parent.phone_number}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-6">
                <div className="flex gap-2">
                  <button className="px-6 py-1 border border-gray-300 rounded-md text-sm font-semibold">
                    Edit
                  </button>
                  <button className="px-6 py-1 bg-[#B6F09C] text-[#003630] rounded-md text-sm font-semibold">
                    New
                  </button>
                </div>
                <div className="bg-[#E7F9DE] border border-[#003630] rounded-lg p-4 w-60 text-center">
                  <div className="mb-2">
                    <p className="text-xs text-gray-500">Open Balance</p>
                    <p className="font-bold text-lg">00:00</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Due Date</p>
                    <p className="font-bold text-lg">00:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#003630] pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#003630]">
                  Transaction History
                </h3>
                <div className="flex gap-3 text-gray-500">
                  <Search className="w-5 h-5" />
                  <FilterIcon className="w-5 h-5" />
                  <SlidersHorizontal className="w-5 h-5" />
                  <Settings2 className="w-5 h-5" />
                  <Printer className="w-5 h-5" />
                </div>
              </div>

              {/* Transaction Table */}
              <div className="border border-[#003630] rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#E7F9DE] text-[#003630]">
                    <tr>
                      <th className="p-3 text-left w-10">
                        <input type="checkbox" />
                      </th>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Txn Type</th>
                      <th className="p-3 text-left">Details</th>
                      <th className="p-3 text-left">Method</th>
                      <th className="p-3 text-left">Amount</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-center">›</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#E7F9DE] text-xs font-semibold">
                      <td
                        colSpan="8"
                        className="p-2 pl-4 border-b border-gray-200"
                      >
                        Term 3 - 2025
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3">Date</td>
                      <td className="p-3">Txn Type</td>
                      <td className="p-3">Details</td>
                      <td className="p-3">Method</td>
                      <td className="p-3">Amount</td>
                      <td className="p-3 text-green-600 flex items-center gap-1">
                        ✔ Settled
                      </td>
                      <td className="p-3 text-center">›</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3">Date</td>
                      <td className="p-3">Txn Type</td>
                      <td className="p-3">Details</td>
                      <td className="p-3">Method</td>
                      <td className="p-3">Amount</td>
                      <td className="p-3 text-green-600 flex items-center gap-1">
                        ✔ Settled
                      </td>
                      <td className="p-3 text-center">›</td>
                    </tr>
                    <tr className="bg-[#E7F9DE] text-xs font-semibold">
                      <td
                        colSpan="8"
                        className="p-2 pl-4 border-b border-gray-200"
                      >
                        Term 2 - 2025
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="h-20 bg-white"></div>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
