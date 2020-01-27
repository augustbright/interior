import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    browserLanguageDetection: false,
    serverLanguageDetection: false,
    defaultLanguage: 'en',    
    defaultNS: 'translation',
    localePath: '/client/public/locales',
    otherLanguages: ['ru']
});

export default NextI18NextInstance;

export const {
    appWithTranslation,
    useTranslation,
    withTranslation,
    i18n
} = NextI18NextInstance;