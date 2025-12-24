import React, { useState } from "react";
import { Plus, UploadIcon } from "lucide-react";
import Tabs from "./Tabs";
import { useCustomer } from "@/context/CustomerContext";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useGetStudents, useGetParentFromStudent } from "@/hooks/Students";
import CustomerTableHead from "./CustomerTableHead";
import PaginationBar from "../PaginationBar";
import Spinner from "./Spinner";
import CustomerSearch from "./CustomerSearch";
import Modal from "./Modal";
import EditStudentForm from "@/features/Students/EditStudentForm";

export default function CustomersTable() {
  const { setView, searchQuery, sortOrder, activeTab } = useCustomer();
  //The expanded row is the row that is clicked. It will get the id of the student that is clicked.
  //If the expanded row and the student Id are NOT the same, it will show the expanded row for that particular student
  //if same, it will close the row
  //to display the parent, it will call the function with the expandedRow, which also happens to be the student ID
  const [expandedRow, setExpandedRow] = useState(null);

  //get useGetStudent and useGetParentFromStudent
  const {
    data: students,
    isPending: isStudentsLoading,
    error: studentsError,
  } = useGetStudents();

  // Filter and Sort Students
  const filteredStudents = students
    ?.filter((student) => {
      // Filter by Grade
      if (activeTab !== "All" && student.grade !== activeTab) return false;

      // Filter by Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const fullName =
          `${student.first_name} ${student.last_name}`.toLowerCase();
        const studentId = student.student_id.toLowerCase();
        if (!fullName.includes(query) && !studentId.includes(query))
          return false;
      }

      return true;
    })
    .sort((a, b) => {
      const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
      const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
      if (sortOrder === "asc") return nameA.localeCompare(nameB);
      return nameB.localeCompare(nameA);
    });

  // Fetch parent when a row is expanded
  const {
    data: parent,
    isPending: isParentLoading,
    error: parentError,
  } = useGetParentFromStudent(expandedRow);

  return (
    <div className="p-6 w-full overflow-scroll thin-scrollbar">
      <h1 className="text-2xl font-semibold mb-6">Students</h1>
      <div className="flex items-center justify-between mb-4 ">
        <CustomerSearch />
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

          <Modal>
            <Modal.Open opens="new-Student">
              <button className="px-4 py-2 gap-4 font-bold flex justify-between items-center bg-[#95E36C] text-[#003049] rounded-xl text-[12px]">
                <span>
                  <Plus />
                </span>
                New User
              </button>
            </Modal.Open>
            <Modal.Window name="new-Student">
              <EditStudentForm onCloseModal={close} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
      {/* Table */}
      <div className="border border-[#003630] rounded-md overflow-hidden max-h-[400px] overflow-y-auto hover:overflow-y-scroll thin-scrollbar">
        <table className="w-full text-sm">
          <CustomerTableHead />
          {isStudentsLoading && isParentLoading ? (
            <tbody>
              <tr>
                <td colSpan={7} className="text-center w-full">
                  <Spinner size="xl" />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {/* Showing students in the database */}
              {filteredStudents?.map((student, i) => (
                <React.Fragment key={i}>
                  <tr
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === student.student_id
                          ? null
                          : student.student_id
                      )
                    }
                    className={`border-t border-[#CBD2E0] hover:bg-gray-50 text-[#000000] cursor-pointer`}
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
                                setView("details", student.student_id);
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
          )}
        </table>
      </div>
      {/* Pagination */}
      <PaginationBar />
    </div>
  );
}
