// src/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", labelKey: "lang.en" },
  { code: "hi", labelKey: "lang.hi" },
  { code: "te", labelKey: "lang.te" }
];

function LanguageSwitcher() {
  // explicitly use "common" namespace (optional, since it's defaultNS)
  const { i18n, t } = useTranslation("common");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <span>{t("changeLanguage")}:</span>
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            padding: "4px 10px",
            borderRadius: 8,
            border:
              i18n.resolvedLanguage?.startsWith(lang.code) ?
                "2px solid black" :
                "1px solid #ccc",
            background: "white",
            cursor: "pointer"
          }}
        >
          {t(lang.labelKey)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;