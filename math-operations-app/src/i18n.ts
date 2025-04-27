import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../public/locales/en.json'),
      },
      ar: {
        translation: require('../public/locales/ar.json'),
      },
      fr: {
        translation: require('../public/locales/fr.json'),
      },
      de: {
        translation: require('../public/locales/de.json'),
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;