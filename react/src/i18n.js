import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Loads translations from your backend
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Integrates i18next with React
  .init({
    lng: "tr",
    fallbackLng: "tr", // Default language if none is detected
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
