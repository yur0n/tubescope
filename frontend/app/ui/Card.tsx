import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';

interface Card {
	id: string;
	title: string;
	description: string;
	publishedAt: Date;
	categoryId: number;
	channelId: string;
	channelTitle: string;
	channel: string;
	viewCount: number;
	likeCount: number;
	commentCount: number;
	topicDetails: string[];
	thumbnail: string;
}

export default function Card({
	id,
	title,
	description,
	publishedAt,
	categoryId,
	channelId,
	channelTitle,
	channel,
	viewCount,
	likeCount,
	commentCount,
	topicDetails,
	thumbnail,
}: Card) {
	return (
		<div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg">
			<img
				className="w-full"
				src={thumbnail}
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{channel}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{publishedAt.toString()}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{viewCount} views
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{likeCount} likes
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					{commentCount} comments
				</span>
			</div>
		</div>
	);
}