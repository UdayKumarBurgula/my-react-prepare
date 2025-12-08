// src/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", labelKey: "lang.en" },
  { code: "hi", labelKey: "lang.hi" },
  { code: "te", labelKey: "lang.te" }
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // good for accessibility/SEO
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <span>{t("changeLanguage")}:</span>
      {LANGS.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          style={{
            padding: "4px 10px",
            borderRadius: 8,
            border:
              i18n.resolvedLanguage?.startsWith(lng.code)
                ? "2px solid black"
                : "1px solid #ccc",
            background: "white",
            cursor: "pointer"
          }}
        >
          {t(lng.labelKey)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;