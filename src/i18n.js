import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import pt from './translations/pt';
import es from './translations/es';
import fr from './translations/fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      pt: pt,
      es: es,
      fr: fr,
    },
    lng: 'pt-br',
    fallbackLng: 'pt-br',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;