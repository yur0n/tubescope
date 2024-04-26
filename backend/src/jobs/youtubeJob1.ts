// Purpose: This file is the main entry point for the youtube job. It fetches all videos from the youtube API, filters out duplicates, saves the videos and channels IDs to the database, and updates all channels.

import { ytApi, videoManager } from './youtubejob/manager';

async function doJob() {
	const regions = await ytApi.getCountryCodes();
	for (const region of regions) {
		const videos = await ytApi.getAllVideosInRegion(region);
		console.log(`Got all videos in ${region}. Total videos: ${videos.length}`);
		const filteredVideos = ytApi.filterDupsVideos(videos);
		console.log(`Filtered out duplicates in ${region}. Total videos: ${filteredVideos.length}`);
		await videoManager.saveVideosAndChannels(filteredVideos);
		console.log(`Videos and channels saved successfully in ${region}! Total videos: ${filteredVideos.length}`);
	}
	
	await videoManager.updateAllChannels();
}

doJob()
	.then(() => process.exit() )
	.catch((e) => {
		console.error('Error:', e);
		process.exit(1);
	});