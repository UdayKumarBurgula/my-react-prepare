// src/pages/AboutPage.js
import React, { useState} from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

      <h2> Implement a Toggle Switch from About Page </h2>

      <button onClick={() => setIsOn(!isOn)} >{isOn ? 'On' : 'Off'}</button>
     
    </div>
  );
}

export default AboutPage;
