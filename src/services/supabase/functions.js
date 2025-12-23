import { supabase } from "./client";

//Get all students for the logged-in user's school
export async function getAllStudents() {
  // Step 1: Get the current authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error(authError);
    throw new Error("User not authenticated");
  }

  // Step 2: Get the user's school_id from their profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("school_id")
    .eq("user_id", user.id)
    .single();

  if (profileError || !profile) {
    console.error(profileError);
    throw new Error("Could not find user profile");
  }

  // Step 3: Get all students belonging to that school
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("school_id", profile.school_id);

  if (error) {
    console.error(error);
    throw new Error("Students could not be loaded");
  }

  return data;
}

//get particularStudent
export async function getStudent(studentId) {
  let { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("student_id", studentId);
  if (error) {
    console.error(error);
    throw new Error("Student could not be loaded");
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
