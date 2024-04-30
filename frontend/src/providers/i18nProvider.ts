import { mergeTranslations, TranslationMessages } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import ukrainianMessages from 'ra-language-ukrainian';
import russianMessages from 'ra-language-russian';
import customEnglishMessages from './locales/en';
import customFrenchMessages from './locales/fr';
import customUkrainianMessages from './locales/ua';
import customRussianMessages from './locales/ru';

const en = mergeTranslations(
    englishMessages,
    customEnglishMessages
);
const fr = mergeTranslations(
    frenchMessages,
    customFrenchMessages
);
const ua = mergeTranslations(
    ukrainianMessages,
    customUkrainianMessages
);
const ru = mergeTranslations(
    russianMessages,
    customRussianMessages
);

const messages: { [key: string]: TranslationMessages } = { en, fr, ua, ru };

export const i18nProvider = polyglotI18nProvider(
    locale => messages[locale],
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
        { locale: 'ua', name: 'Українська' },
        { locale: 'ru', name: 'Русский' },
    ]
);