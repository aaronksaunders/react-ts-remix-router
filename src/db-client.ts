import { createClient } from "@supabase/supabase-js";

// see documention about using .env variables
// https://remix.run/docs/en/v1/guides/envvars#server-environment-variables
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;
export const supabaseClient = createClient(supabaseUrl, supabaseKey);


export interface Player {
    id: string;
    username: string;
    bio: string;
    team?: {
        id: string;
        name: string
    }
  }