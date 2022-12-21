import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import CONSTANTS from './utils/constants';

interface I18nProps {
  allbackLng: string,
    debug: boolean,
    detection: {
      order: string[],
      cache: string[],
    },
    interpolation: {
      escapeValue: boolean,
    },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next);
i18n
  .init({
    fallbackLng: CONSTANTS.DEFAULT__LANG,
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  } as unknown as I18nProps);

export default i18n;
