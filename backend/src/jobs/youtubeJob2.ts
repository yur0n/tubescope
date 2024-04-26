// Purpose: Entry point for the youtubeJob2 job. This job is responsible for updating the database with the latest statistics of all saved videos.

import { videoManager } from './youtubejob/manager';

async function doJob() {
	await videoManager.updateAllVideos();
	console.log('Videos updated successfully!');
}

doJob()
	.then(() => process.exit() )
	.catch((e) => {
		console.error('Error:', e);
		process.exit(1);
	});