
import { youtube_v3 } from "googleapis";
import { SupabaseClient } from "@supabase/supabase-js";
import { Tables } from "../../types/db.types";

class VideoManager {

	constructor(
		public supabase: SupabaseClient,
		public youtube: youtube_v3.Youtube,
		public streams = 100
	) {}

	private async getFromDb(table: string, start: number, end: number): Promise<string[] | null>{
		const { data, error } = await this.supabase
		.from(table)
		.select('id')
		.range(start, end);
	
		if (error || !data.length) {
			console.error(new Date().toJSON() + ` ⚠️ Error getting ${table} from DB:`, error);
			return null;
		}

		return data.map(el => el.id);
	}

	private async saveToDb(table: string, data: Tables<'channels'>[] |Partial<Tables<'videos'>>[]) {
		await Promise.all(data.map(async (chunk) => {
			const { error: updateError } = await this.supabase
					.from(table)
					.update(chunk)
					.match({ id: chunk.id })
			if (updateError) console.error(new Date().toJSON() + ` ⚠️ Error while ${table} DB update: `, updateError)
		}));
	}

	private mapForDb(table: string, items: youtube_v3.Schema$Video[] | youtube_v3.Schema$Channel[]) {
		let result: Partial<Tables<'videos'>>[] | Tables<'channels'>[];
		if (table === 'videos') {
			result = items.map((item) => {
				return {
					id: item.id || '',
					viewCount: parseInt(item.statistics?.viewCount || '0'),
					likeCount: parseInt((item.statistics as youtube_v3.Schema$VideoStatistics)?.likeCount || '0'),
					commentCount: parseInt(item.statistics?.commentCount || '0'),
				};
			});
		}
		if (table === 'channels') {
			result = items.map((item) => {
				return {
					id: item.id || '',
					title: item.snippet?.title || '',
					description: item.snippet?.description || null,
					customUrl: (item.snippet as youtube_v3.Schema$ChannelSnippet)?.customUrl || null,
					publishedAt: item.snippet?.publishedAt || null,
					thumbnail: item.snippet?.thumbnails?.high?.url || null,
					country: (item.snippet as youtube_v3.Schema$ChannelSnippet)?.country || null,
					viewCount: parseInt(item.statistics?.viewCount || '0'),
					subscriberCount: parseInt((item.statistics as youtube_v3.Schema$ChannelStatistics)?.subscriberCount || '0'),
					videoCount: parseInt((item.statistics as youtube_v3.Schema$ChannelStatistics)?.videoCount || '0'),
					topicDetails: item.topicDetails?.topicCategories || [],
				};
			});
		} else return [];
		return result;
	}

  async saveVideosAndChannels(videos: Tables<'videos'>[]) { // saves provided videos and channels id 
    try {
			let i = 0;
			while (i < videos.length) {
				const chunk = videos.slice(i, i + this.streams);
				await Promise.all(chunk.map(async (video) => {
					let { error: channelError } = await this.supabase
						.from('channels')
						.upsert({ id: video.channelId });
					if (channelError) throw channelError;

					let { error: videoError } = await this.supabase
						.from('videos')
						.upsert(video);
					if (videoError) throw videoError;
				}));
				i += this.streams;
			}
      console.log('Videos and channels saved successfully!');
    } catch (err) {
      console.error('Error saving videos and channels:', err);
    }
  }

  async updateAllChannels() { // adds missing channels fields and/or updates channel statistics
    try {
			let i = 0;
			while (true) {
				const channels = await this.getFromDb('channels', i, i + 49);
        if (!channels) break;

				const { data: { items }} = await this.youtube.channels.list({
						part: ['snippet, statistics, topicDetails'],
						id: channels,
						maxResults: 50
				});
				if (!items) break;
				const mappedChannels = this.mapForDb('channels', items);
				await this.saveToDb('channels', mappedChannels);

				i += 50;
			}
			console.log(new Date().toJSON() + ' Channels update completed ✅')
		} catch(e) {
			console.error(new Date().toJSON() + ' ⚠️ Error while channels update: ', e)
		} 
  }

  async updateAllVideos() { // updates videos statistics
    try {
			let i = 0;

			while (true) {
				const videos = await this.getFromDb('videos', i, i + 49);
        if (!videos) break;

				const { data: { items } } = await this.youtube.videos.list({
						part: ['statistics'],
						id: videos,
						maxResults: 50
				});
				if (!items) break;
				const mappedVideos = this.mapForDb('videos', items)
				await this.saveToDb('videos', mappedVideos);

				i += 50;
			}
			console.log(new Date().toJSON() + ' Videos update completed ✅')
		} catch(e) {
			console.error(new Date().toJSON() + ' ⚠️ Error while videos update: ', e)
		} 
  }
}

export default VideoManager
