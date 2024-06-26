
export default {
	// ra: {
	// 		action: {
	// 				edit: '',
	// 		}
	// },
	'ra-supabase': {
			auth: {
					email: 'Email',
					confirm_password: 'Confirmation du mot de passe',
					sign_in_with: 'Se connecter avec %{provider}',
					forgot_password: 'Mot de passe oublié ?',
					reset_password: 'Réinitialiser le mot de passe',
					password_reset:
							'Votre mot de passe a été réinitialisé. Vous recevrez un email contenant un lien pour vous connecter.',
			},
			validation: {
					password_mismatch: 'Les mots de passe ne correspondent pas',
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