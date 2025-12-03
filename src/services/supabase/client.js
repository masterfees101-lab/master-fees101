import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ookznzyorjzmryulktiw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9va3puenlvcmp6bXJ5dWxrdGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODM1MDAsImV4cCI6MjA3OTY1OTUwMH0.Zni_JQkrUz9jzD6np3dRkAVbAqm0KPwMvniPDkV52o8"
);
