// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto-detect language (from browser / localStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "te"],

    // Simple inline translations
    resources: {
      en: {
        translation: {
          appTitle: "My Multi-language App",
          welcome: "Welcome, {{name}}!",
          description: "This app demonstrates useTranslation with multiple languages.",
          changeLanguage: "Change language",
          lang: {
            en: "English",
            hi: "Hindi",
            te: "Telugu"
          },
          counterLabel: "You clicked {{count}} time",
          counterLabel_plural: "You clicked {{count}} times"
        }
      },
      hi: {
        translation: {
          appTitle: "मल्टी-भाषा ऐप",
          welcome: "स्वागत है, {{name}}!",
          description: "यह ऐप useTranslation के साथ बहु-भाषा समर्थन दिखाता है।",
          changeLanguage: "भाषा बदलें",
          lang: {
            en: "अंग्रेज़ी",
            hi: "हिन्दी",
            te: "तेलुगु"
          },
          counterLabel: "आपने {{count}} बार क्लिक किया",
          counterLabel_plural: "आपने {{count}} बार क्लिक किया"
        }
      },
      te: {
        translation: {
          appTitle: "మల్టీ లాంగ్వేజ్ యాప్",
          welcome: "స్వాగతం, {{name}}!",
          description: "ఈ యాప్ useTranslation తో బహుభాషా మద్దతును చూపిస్తుంది.",
          changeLanguage: "భాష మార్చండి",
          lang: {
            en: "ఇంగ్లీష్",
            hi: "హిందీ",
            te: "తెలుగు"
          },
          counterLabel: "మీరు {{count}} సారి క్లిక్ చేశారు",
          counterLabel_plural: "మీరు {{count}} సార్లు క్లిక్ చేశారు"
        }
      }
    },

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export default i18n;