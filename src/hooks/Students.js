// hooks/useStudents.js
import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "../services/supabase/functions";
import {
  getParentFromStudent,
  getStudent,
} from "../services/supabase/functions";

export function useGetStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
  });
}
export function useGetParentFromStudent(studentId) {
  return useQuery({
    queryKey: ["parent", studentId],
    queryFn: () => getParentFromStudent(studentId),
    enabled: !!studentId, // Only fetch when studentId is truthy
  });
}

export function useGetSpecificStudent(studentId) {
  return useQuery({
    queryKey: ["student", studentId],
    queryFn: () => getStudent(studentId),
    enabled: !!studentId, // Only fetch when studentId is truthy
  });
}
