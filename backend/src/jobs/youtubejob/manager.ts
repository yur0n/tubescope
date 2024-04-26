
import { google } from 'googleapis'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/db.types'

import VideoManager from './youtubeToDb';
import YouTubeAPI from './youtubeApi';

const apiKey = process.env.YT_API_KEY!
const youtube = google.youtube({
	version: 'v3',
	auth: apiKey
})

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export const ytApi = new YouTubeAPI(youtube);
export const videoManager = new VideoManager(supabase, youtube);
