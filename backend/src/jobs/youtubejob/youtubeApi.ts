import { youtube_v3 } from "googleapis";
import { Tables } from "../../types/db.types";

class YouTubeAPI {

  constructor(
		public youtube: youtube_v3.Youtube,
    public apiQuota = 10_000
  ) {}

	private async mapVideos(videos: youtube_v3.Schema$Video[]) {
		const result = videos.map(item => {
			let thumbs = item.snippet?.thumbnails
			let thumbnail
			if (!thumbs) thumbnail = ''
			else {
				thumbnail = thumbs.maxres?.url || thumbs.standard?.url
						|| thumbs.high?.url || thumbs.medium?.url || thumbs.default?.url
			}
			return {
				id: item.id || '',
				title: item.snippet?.title || '',
				description: item.snippet?.description || '',
				publishedAt: item.snippet?.publishedAt || '',
				categoryId: parseInt(item.snippet?.categoryId || '0'),
				channelId: item.snippet?.channelId || '',
				channelTitle: item.snippet?.channelTitle || '',
				viewCount: parseInt(item.statistics?.viewCount || '0'),
				likeCount: parseInt(item.statistics?.likeCount || '0'),
				commentCount: parseInt(item.statistics?.commentCount || '0'),
				topicDetails: item.topicDetails?.topicCategories || [],
				thumbnail: thumbnail || ''
			}
		})
		return result
	}

  async getVideos(videoCategoryId = '1', regionCode = 'US', pageToken = '') {
    if (this.apiQuota < 5000) console.info('INFO: YouTube API quota limit at 5000')
		if (this.apiQuota < 100) {
			// change apiKey (move youtube initialization to constructor and change
			// apiKey here or reuse class with new youtube instance and apiKey)
			// --this.apiQuota = 10_000
			console.info('!!!!! DANGER: YouTube API quota limit is close, > 9900 !!!!!')
		}
		--this.apiQuota
		const params = {
			maxResults: 50,
			part: ['snippet, statistics, topicDetails'],
			chart: "mostPopular",
			pageToken,
			videoCategoryId,
			regionCode
		}

		try {
			let result = await this.youtube.videos.list(params);
			let items = result.data.items || [];
			if (result.data.nextPageToken) {
				let moreItems = await this.getVideos(videoCategoryId, regionCode, result.data.nextPageToken);
				items = items ? moreItems ? [...items, ...moreItems] : items : [];
				return items;
			}
			return items;
		} catch (e) {
			// console.log(e.errors)
			// console.log('Problem with category #' + videoCategoryId + ' in ' +  regionCode)
			return [];
		}
  }

  async getAllVideosInRegion(region: string): Promise<Tables<'videos'>[]> {
    const categoryIds = ['1','2','15','17','20','23','24','25','26','28']
		// let unpopularIds = [10,22,29]
		// let bannedIds = [18,19,21,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]
		let arr: youtube_v3.Schema$Video[] = [];
		for (const id of categoryIds) {
			let newArr = await this.getVideos(id, region)
			arr = newArr ? [...arr, ...newArr]: arr;
			// if (newArr.length) console.log(`Got videos in category #${id} in ${region}. Total videos in region: ${arr.length}`)
		}

		return this.mapVideos(arr)
  }

  async getCountryCodes() {
    try {
			let { data: { items } } = await this.youtube.i18nRegions.list({ part: ['snippet'] })
			if (!items) throw new Error('No items in getCountryCodes')
			return items.map(el => el.id!)
		} catch (e) {
			console.log('Unable to get regionCodes\n', e)
			return []
		}
  }
	
  // async getAllVideos() {
  //   let videos: youtube_v3.Schema$Video[] = [];
	// 	let regions = await this.getCountryCodes();
	// 	for (const region of regions) {
	// 		let moreVideos = await this.getAllVideosInRegion(region);
	// 		videos = [...videos, ...moreVideos];
	// 		// console.log(`Got all videos in ${region}. Total videos: ${videos.length}`)
	// 	}
	// 	return this.mapVideos(videos);
  // }

	filterDupsVideos(videos: Tables<'videos'>[]) { // filters out video duplicates. This method levels out the option to sort videos by Most popular by region
		let uniq = new Set()
		const videoData = videos.filter((value) => {
			if (!uniq.has(value['id'])) {
				uniq.add(value['id'])
				return true;
			}
			return false
		})
		return videoData
	}
}

export default YouTubeAPI;