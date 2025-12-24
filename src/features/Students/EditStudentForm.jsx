import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/services/supabase/client";
import toast from "react-hot-toast";
import { User, GraduationCap, Calendar, Users, Type } from "lucide-react";

const GRADES = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
];

function EditStudentForm({
  student = null,
  onSubmit,
  onCloseModal,
  name = "new-student",
}) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    grade: "",
    class: "",
    parent_id: "",
    date_of_enrollment: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch parents with React Query
  const { data: parents, isLoading: parentsLoading } = useQuery({
    queryKey: ["parents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("parents")
        .select("*")
        .order("last_name", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  // Pre-fill form if editing
  useEffect(() => {
    if (name === "edit-student" && student) {
      setFormData({
        first_name: student.first_name || "",
        last_name: student.last_name || "",
        grade: student.grade || "",
        class: student.class || "",
        parent_id: student.parent_id || "",
        date_of_enrollment:
          student.date_of_enrollment || new Date().toISOString().split("T")[0],
      });
    }
  }, [student, name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "Required";
    if (!formData.last_name.trim()) newErrors.last_name = "Required";
    if (!formData.grade) newErrors.grade = "Required";
    if (!formData.class.trim()) newErrors.class = "Required";
    if (!formData.parent_id) newErrors.parent_id = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      toast.success(
        name === "edit-student"
          ? "Student updated successfully!"
          : "Student created successfully!"
      );

      if (name === "new-student") {
        setFormData({
          first_name: "",
          last_name: "",
          grade: "",
          class: "",
          parent_id: "",
          date_of_enrollment: new Date().toISOString().split("T")[0],
        });
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full flex flex-col gap-6">
      {/* Header */}
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {name === "edit-student"
            ? "Edit Student Details"
            : "New Student Registration"}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {name === "edit-student"
            ? "Update the student's information below."
            : "Enter the details to register a new student."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <User size={16} className="text-gray-400" />
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            // onChange={handleChange}
            placeholder="e.g. Chanda"
            className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#95e36c]/50 ${
              errors.first_name ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.first_name && (
            <span className="text-xs text-red-500">{errors.first_name}</span>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <User size={16} className="text-gray-400" />
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            // onChange={handleChange}
            placeholder="e.g. Mwale"
            className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#95e36c]/50 ${
              errors.last_name ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.last_name && (
            <span className="text-xs text-red-500">{errors.last_name}</span>
          )}
        </div>

        {/* Grade */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <GraduationCap size={16} className="text-gray-400" />
            Grade Level
          </label>
          <div className="relative">
            <select
              name="grade"
              value={formData.grade}
              // onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none appearance-none focus:ring-2 focus:ring-[#95e36c]/50 ${
                errors.grade ? "border-red-500" : "border-gray-200"
              }`}
            >
              <option value="">Select Grade</option>
              {GRADES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3 pointer-events-none text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          {errors.grade && (
            <span className="text-xs text-red-500">{errors.grade}</span>
          )}
        </div>

        {/* Class */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Type size={16} className="text-gray-400" />
            Class Name
          </label>
          <input
            type="text"
            name="class"
            value={formData.class}
            // onChange={handleChange}
            placeholder="e.g. 3A"
            className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#95e36c]/50 ${
              errors.class ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.class && (
            <span className="text-xs text-red-500">{errors.class}</span>
          )}
        </div>

        {/* Parent Selection - Full Width */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Users size={16} className="text-gray-400" />
            Parent / Guardian
          </label>
          <div className="relative">
            <select
              name="parent_id"
              value={formData.parent_id}
              // onChange={handleChange}
              disabled={parentsLoading}
              className={`w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none appearance-none focus:ring-2 focus:ring-[#95e36c]/50 ${
                errors.parent_id ? "border-red-500" : "border-gray-200"
              }`}
            >
              <option value="">
                {parentsLoading ? "Loading parents..." : "Select Parent"}
              </option>
              {parents?.map((p) => (
                <option key={p.parent_id} value={p.parent_id}>
                  {p.first_name} {p.last_name}{" "}
                  {p.phone_number ? `— ${p.phone_number}` : ""}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3 pointer-events-none text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          {errors.parent_id && (
            <span className="text-xs text-red-500">{errors.parent_id}</span>
          )}
        </div>

        {/* Date of Enrollment - Full Width */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar size={16} className="text-gray-400" />
            Date of Enrollment
          </label>
          <input
            type="date"
            name="date_of_enrollment"
            value={formData.date_of_enrollment}
            // onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#95e36c]/50 border-gray-200"
          />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onCloseModal}
          className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-xl font-bold bg-[#95e36c] text-[#003630] hover:bg-green-400 transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-[#003630]/30 border-t-[#003630] rounded-full animate-spin" />
          ) : null}
          {name === "edit-student" ? "Update Student" : "Create Student"}
        </button>
      </div>
    </form>
  );
}

export default EditStudentForm;
