// src/App.js
import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyFeature from "./MyFeature";

function App() {
  const { t } = useTranslation("common"); 
  // "common" is preloaded
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: "system-ui", padding: 24, maxWidth: 800 }}>
        <h1>{t("appTitle")}</h1>

        <LanguageSwitcher />

        {/* Simple navigation */}
        <nav style={{ marginBottom: 16, display: "flex", gap: 12 }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none"
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none"
            })}
          >
            About
          </NavLink>
        </nav>

        {/* Counter still uses common.json */}
        <button onClick={() => setCount((c) => c + 1)} style={{ marginBottom: 16 }}>
          {t("counterLabel", { count })}
        </button>

        {/* Show Feature section (myTranslation namespace) */}
        {/* myTranslation is lazy too */}
        <Suspense fallback={<p>Loading feature translations…</p>}>
          <MyFeature />
        </Suspense>

        <hr style={{ margin: "24px 0" }} />

        {/* Router outlet area */}

        {/* Wrap routed pages with Suspense for lazy namespaces */}
        <Suspense fallback={<p>Loading page…</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
