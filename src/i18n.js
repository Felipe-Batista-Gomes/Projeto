import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import pt from './translations/pt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      pt: pt,
    },
    lng: 'pt-br',
    fallbackLng: 'pt-br',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;