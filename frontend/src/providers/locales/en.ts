

export default {
	// ra: {
	// 		action: {
	// 				edit: '',
	// 		}
	// },
	'ra-supabase': {
			auth: {
					email: 'Email',
					confirm_password: 'Confirm password',
					sign_in_with: 'Sign in with %{provider}',
					forgot_password: 'Forgot password?',
					reset_password: 'Reset password',
					password_reset:
							'Your password has been reset. You will receive an email containing a link to log in.',
			},
			validation: {
					password_mismatch: 'Passwords do not match',
			},
	},
	resources: {
			videos: {
					name: 'Video |||| Videos',
					fields: {
							title: 'Title',
							description: 'Description',
							customUrl: 'Custom URL',
							publishedAt: 'Date',
							thumbnail: 'Thumbnail',
							country: 'Country',
							viewCount: 'Views',
							likeCount: 'Likes',
							commentCount: 'Comments',
							topicDetails: 'Topics',
					},
			},
			channels: {
					name: 'Channel |||| Channels',
					fields: {
							title: 'Title',
							description: 'Description',
							customUrl: 'Custom URL',
							publishedAt: 'Date',
							thumbnail: 'Thumbnail',
							country: 'Country',
							viewCount: 'Views',
							subscriberCount: 'Subscribers',
							videoCount: 'Videos',
							topicDetails: 'Topics',
					},
			},
			users: {
					name: 'Client |||| Clients',
					fields: {
							phone: 'Phone',
							id: 'Phone',
							name: 'Name',
							username: 'Username',
							note: 'Note',
							telegram: 'Telegram',
					},
			},
			messages: {
					name: 'Message |||| Messages',
					fields: {
							message: 'Message',
							date: 'Date',
					}
			}
	},
	server: {
			res: {
					201: 'Message sent',
					207: 'Error sending message to some users',
					400: 'Error sending message',
			},
	},
	custom: {
			action: {
					sendMessage: 'Send message',
					bulkSendMessage: 'Send to all',
					send: 'Send',
					cancel: 'Cancel',
			},
			fields: {
					chat: 'Chat',
					summary: 'Summary',
			},
			labels: {
					message: 'Message',
					writeMessage: 'Write message',
			},
	},
};