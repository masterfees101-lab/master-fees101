// hooks/useStudents.js
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../services/supabase/functions";
import { getParentFromStudent } from "../services/supabase/functions";

export function useGetStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
}
export function useGetParentFromStudent(studentId) {
  return useQuery({
    queryKey: ["parent", studentId],
    queryFn: () => getParentFromStudent(studentId),
    enabled: !!studentId, // Only fetch when studentId is truthy
  });
}
