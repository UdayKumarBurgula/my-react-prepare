// src/App.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import MyFeature from "./MyFeature";

function App() {
  // "common" namespace by default
  const { t } = useTranslation("common");
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24, maxWidth: 700 }}>
      <h1>{t("appTitle")}</h1>

      <LanguageSwitcher />

      <h2>{t("welcome", { name: "Developer" })}</h2>
      <p>{t("description")}</p>

      <button onClick={() => setCount((c) => c + 1)} style={{ marginTop: 12 }}>
        {t("counterLabel", { count })}
      </button>

      <hr style={{ margin: "24px 0" }} />

      <MyFeature />
    </div>
  );
}

export default App;