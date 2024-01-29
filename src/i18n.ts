import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { supportedLngs } from "./data/languages";

import pt from "./assets/locales/pt/translation.json";
import en from "./assets/locales/en/translation.json";
import ja from "./assets/locales/ja/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: supportedLngs.map((lng) => lng.code),
    fallbackLng: "pt",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    resources: {
      pt: {
        translation: pt,
      },
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
  });
