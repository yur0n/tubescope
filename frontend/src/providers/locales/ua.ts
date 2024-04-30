

export default {
	// ra: {
	// 		action: {
	// 				edit: '',
	// 		}
	// },
	'ra-supabase': {
			auth: {
						email: 'Електронна пошта',
						confirm_password: 'Підтвердіть пароль',
						sign_in_with: 'Увійти за допомогою %{provider}',
						forgot_password: 'Забули пароль?',
						reset_password: 'Скинути пароль',
						password_reset: 'Ваш пароль було скинуто. Ви отримаєте електронний лист з посиланням для входу.',
			},
			validation: {
					password_mismatch: 'Паролі не збігаються',
			},
	},
	resources: {
			videos: {
					name: 'Відео |||| Відео',
					fields: {
							title: 'Назва',
							description: 'Опис',
							customUrl: 'Користувацький URL',
							publishedAt: 'Дата',
							thumbnail: 'Мініатюра',
							country: 'Країна',
							viewCount: 'Перегляди',
							likeCount: 'Подобається',
					},
			},
			channels: {
					name: 'Канал |||| Канали',
					fields: {
							title: 'Назва',
							description: 'Опис',
							customUrl: 'Користувацький URL',
							publishedAt: 'Дата',
							thumbnail: 'Мініатюра',
							country: 'Країна',
							viewCount: 'Перегляди',
							subscriberCount: 'Підписники',
							videoCount: 'Відео',
							topicDetails: 'Теми',
					},
			},
	},
	server: {
			res: {
					201: 'Повідомлення відправлено',
					207: 'Помилка при відправці повідомлення деяким користувачам',
					400: 'Помилка при відправці повідомлення',
			},
	},
	custom: {
			action: {
					sendMessage: 'Відправити повідомлення',
					bulkSendMessage: 'Відправити всім',
					send: 'Відправити',
					cancel: 'Скасувати',
			},
			fields: {
					chat: 'Чат',
					summary: 'Резюме',
			},
			labels: {
					message: 'Повідомлення',
					writeMessage: 'Напишіть повідомлення',
			},
	},
};