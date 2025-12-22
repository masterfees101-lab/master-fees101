import { supabase } from "./client";
//Get all students
export async function getStudents() {
  let { data, error } = await supabase.from("students").select("*");
  if (error) {
    console.error(error);
    throw new Error("Students could not be loaded");
  }
  return data;
}

//Get parent based on student ID
export async function getParentFromStudent(studentId) {
  // First get the student's parent_id
  const { data: student, error: studentError } = await supabase
    .from("students")
    .select("parent_id")
    .eq("student_id", studentId)
    .single();

  if (studentError) {
    console.error(studentError);
    throw new Error("Could not find student");
  }

  // If student has no parent assigned
  if (!student?.parent_id) {
    return null;
  }

  // Then get the parent using parent_id
  const { data: parent, error: parentError } = await supabase
    .from("parents")
    .select("*")
    .eq("parent_id", student.parent_id)
    .single();

  if (parentError) {
    console.error(parentError);
    throw new Error("Parent could not be loaded");
  }

  return parent;
}
