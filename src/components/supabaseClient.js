import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gxxpfhcgynwwfqrsbmas.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4eHBmaGNneW53d2ZxcnNibWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzM1NjAsImV4cCI6MjA2MDkwOTU2MH0.QaS-9G1cOiABxP2QWtvaLxY6AeEiaxHUud6a0pQYVGI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);