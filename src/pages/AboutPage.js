// src/pages/AboutPage.js
import React, { useState} from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

      <h2> Counter from About Page </h2>

      <p> {count}</p>

      <button onClick={() => setCount(count+1)} >Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default AboutPage;
