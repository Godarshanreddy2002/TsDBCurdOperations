import { createClient } from "@supabase/supabase-js";
 
const SUPABASE_URL='https://rpsfsggtydflqjkduzgt.supabase.co';
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc2ZzZ2d0eWRmbHFqa2R1emd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzE2ODYsImV4cCI6MjA0Nzc0NzY4Nn0.wdRGjSJBef_UexqTmpok3-cRxHO6I86jbDMYmvbzZC0";
 
const supabase=createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
 
export default supabase;
