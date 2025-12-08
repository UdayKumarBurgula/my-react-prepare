// src/pages/HomePage.js
import React from "react";
import { useTranslation } from "react-i18next";

function HomePage() {
  // ✅ Use page-specific namespace + fallback to "common"
  const { t } = useTranslation(["home", "common"]);

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("welcomeMessage")}</p>
      <p>{t("info")}</p>
    </div>
  );
}

export default HomePage;
