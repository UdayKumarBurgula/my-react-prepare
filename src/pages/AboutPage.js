// src/pages/AboutPage.js
import React from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>
    </div>
  );
}

export default AboutPage;
