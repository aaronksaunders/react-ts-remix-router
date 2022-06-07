/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_DATABASE_URL: string
    readonly VITE_APP_SUPABASE_ANON_KEY:string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }