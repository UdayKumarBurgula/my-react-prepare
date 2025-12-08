// src/App.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  const { t } = useTranslation(); // default "translation" namespace
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui", padding: "24px", maxWidth: 600 }}>
      <h1>{t("appTitle")}</h1>

      <LanguageSwitcher />

      <h2>{t("welcome", { name: "Developer" })}</h2>
      <p>{t("description")}</p>

      <button onClick={() => setCount((c) => c + 1)} style={{ marginTop: 12 }}>
        {t("counterLabel", { count })}
      </button>
    </div>
  );
}

export default App;