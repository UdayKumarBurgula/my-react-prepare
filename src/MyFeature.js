// src/MyFeature.js
import React from "react";
import { useTranslation } from "react-i18next";

function MyFeature() {
  // ✅ Here is what you asked for:
  // using array notation with namespaces
  // Use myTranslation namespace (and common as fallback if needed)
  const { t } = useTranslation(["myTranslation", "common"]);
  // myTranslation is searched first, then common as fallback

  return (
    <section style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3>{t("featureTitle")}</h3>
      <p>{t("featureDescription")}</p>
      <button style={{ marginTop: 8 }}>
        {t("buttonLabel")}
      </button>
    </section>
  );
}

export default MyFeature;
