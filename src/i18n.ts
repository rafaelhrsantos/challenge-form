import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import * as ReactI18next from "react-i18next";
import resources from './locales/index';

i18n
  .use(LanguageDetector)
  .use(ReactI18next.initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    load: 'languageOnly',
    resources,
    debug: false,
    detection: {
      order: ['querystring', 'navigator']
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      defaultTransParent: 'div'
    }
  });

export default i18n;
