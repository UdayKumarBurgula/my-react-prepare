// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';



function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  return (
      <div>
          <h3>CreatePortal: Rendering to a different part of the DOM</h3>
          <div style={{ border: '2px solid black' }}>
              <p>This child is placed in the parent div.</p>
              {createPortal(
                  <p>This child is placed in the document body.</p>,
                  document.body
              )}
          </div>
          
      </div>
  );
}

export default AboutPage;
