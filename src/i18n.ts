import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "it-IT"], 
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": {
        translation: {
          hello_welcome: "Hello, welcome!",
          switch_language: "Switch to Italian",
          example_text: "This is an example text.",
        },
      },
      "it-IT": {
        translation: {
          hello_welcome: "Ciao, benvenuto!",
          switch_language: "Passa all'inglese",
          example_text: "Questo è un testo di esempio.",
        },
      },
    },
    detection: {
      order: ["navigator", "localStorage", "sessionStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
