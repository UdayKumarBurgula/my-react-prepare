// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  // Load translation files from /public/locales/{{lng}}/{{ns}}.json
  .use(HttpBackend)
  // Detect language (localStorage, browser, <html lang>, etc.)
  .use(LanguageDetector)
  // Connect with react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "te"],

    // Declare namespaces
    ns: ["common", "myTranslation"],
    defaultNS: "common",

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    },

    interpolation: {
      escapeValue: false
    },

    debug: false
  });

export default i18n;