import { supabaseDataProvider } from 'ra-supabase';
import { supabase } from '../db/supabase';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const dataProvider = supabaseDataProvider({
    instanceUrl: SUPABASE_URL,
    apiKey: SUPABASE_KEY,
    supabaseClient: supabase,
		primaryKeys: new Map([
			['channels', ['id']],
			['videos', ['id']],
	]),
});