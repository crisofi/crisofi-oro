/*
  Supabase setup instructions:

  1. Create a project at https://supabase.com
  2. Run this SQL in the SQL Editor:

  CREATE TABLE leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    property_name text,
    email text NOT NULL,
    message text,
    created_at timestamptz DEFAULT now()
  );

  3. Copy your project URL and service role key to .env.local
*/

export {}; // module marker — actual client is instantiated in the API route
