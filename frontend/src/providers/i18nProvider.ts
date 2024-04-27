import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import { raSupabaseEnglishMessages } from 'ra-supabase-language-english';
import { raSupabaseFrenchMessages } from 'ra-supabase-language-french';
import customEnglishMessages from './locales/en';

const allEnglishMessages = mergeTranslations(
    englishMessages,
    raSupabaseEnglishMessages,
    customEnglishMessages
);
const allFrenchMessages = mergeTranslations(
    frenchMessages,
    raSupabaseFrenchMessages
);

export const i18nProvider = polyglotI18nProvider(
    locale => (locale === 'fr' ? allFrenchMessages : allEnglishMessages),
    'en',
    [
        { locale: 'en', label: 'English' },
        { locale: 'fr', label: 'Français' },
    ]
);