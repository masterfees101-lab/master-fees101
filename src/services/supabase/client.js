import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ookznzyorjzmryulktiw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9va3puenlvcmp6bXJ5dWxrdGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODM1MDAsImV4cCI6MjA3OTY1OTUwMH0.Zni_JQkrUz9jzD6np3dRkAVbAqm0KPwMvniPDkV52o8";
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
