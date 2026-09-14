// client.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
// 👇 Agora usa a nova variável de ambiente
const SUPABASE_PUBLISHABLE_KEY = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY || '';

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.error(
    '[Supabase] Variáveis de ambiente ausentes. Verifique se o arquivo .env existe na raiz do projeto e reinicie o npm start.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});