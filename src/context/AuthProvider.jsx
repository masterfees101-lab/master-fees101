import { supabase } from "../services/supabase/client";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const user = supabase.auth.getUser();
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
