// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active' : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};



function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

    const tabs = [
        { label: 'Tab 1', content: <div>Content of Tab 1</div> },
        { label: 'Tab 2', content: <div>Content of Tab 2</div> },
        { label: 'Tab 3', content: <div>Content of Tab 3</div> },
    ];
  
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

          <h3>Implement a Tabs Component</h3>
      
          <Tabs tabs={tabs} />
           
    </div>
  );
}

export default AboutPage;
