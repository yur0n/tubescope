import { CronJob } from 'cron';
import { spawn } from 'child_process';

new CronJob(
	'0 0 0 */2 * *',
  job1,
	null,
	true,
	'America/Los_Angeles'
);

new CronJob(
	'0 0 0 2/2 * *',
	job2,
	null,
	true,
	'America/Los_Angeles'
);

async function job1() {
	console.log('Running a job');

	const child = spawn('node', ['./build/src/jobs/youtubeJob1.js']);

	child.stdout.on('data', (data: string) => {
			console.log(`stdout: ${data}`);
	});

	child.stderr.on('data', (data: string) => {
			console.error(`stderr: ${data}`);
	});

	child.on('close', (code) => {
			console.log(`youtubeJob1 process exited with code ${code}`);
	});
}


async function job2() {
	console.log('Running a job');

	const child = spawn('node', ['./build/src/jobs/youtubeJob2.js']);

	child.stdout.on('data', (data: string) => {
			console.log(`stdout: ${data}`);
	});

	child.stderr.on('data', (data: string) => {
			console.error(`stderr: ${data}`);
	});

	child.on('close', (code) => {
			console.log(`youtubeJob2 process exited with code ${code}`);
	});
	
}

