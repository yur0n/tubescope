

export default {
	// ra: {
	// 		action: {
	// 				edit: '',
	// 		}
	// },
	'ra-supabase': {
			auth: {
					email: 'Электронная почта',
					confirm_password: 'Подтвердите пароль',
					sign_in_with: 'Войти с помощью %{provider}',
					forgot_password: 'Забыли пароль?',
					reset_password: 'Сбросить пароль',
					password_reset: 'Ваш пароль был сброшен. Вы получите электронное письмо с ссылкой для входа.',
		},
			validation: {
					password_mismatch: 'Пароли не совпадают',
		},
	},
	resources: {
			videos: {
					name: 'Видео |||| Видео',
					fields: {
							title: 'Название',
							description: 'Описание',
							customUrl: 'Пользовательский URL',
							publishedAt: 'Дата',
							thumbnail: 'Миниатюра',
							country: 'Страна',
							viewCount: 'Просмотры',
							likeCount: 'Лайки',
							commentCount: 'Комментарии',
							topicDetails: 'Темы',
					},
			},
			channels: {
					name: 'Канал |||| Каналы',
					fields: {
							title: 'Название',
							description: 'Описание',
							customUrl: 'Пользовательский URL',
							publishedAt: 'Дата',
							thumbnail: 'Миниатюра',
							country: 'Страна',
							viewCount: 'Просмотры',
							subscriberCount: 'Подписчики',
							videoCount: 'Видео',
							topicDetails: 'Темы',
					},
			},
	},
	server: {
			res: {
					201: 'Сообщение отправлено',
					207: 'Сообщения были отправлены не всем клиентам',
					400: 'Ошибка отправки сообщения',
			},
	},
	custom: {
			action: {
					sendMessage: 'Отправить сообщение',
					bulkSendMessage: 'Отправить всем',
					send: 'Отправить',
					cancel: 'Отмена',
			},
			fields: {
					chat: 'Чат',
					summary: 'Сводка',
			},
			labels: {
					message: 'Cообщение',
					writeMessage: 'Напишите сообщение',
			},
	},
};