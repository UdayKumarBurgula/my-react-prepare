// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const DropdownMenu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} >Toggle Menu</button>
            {isOpen && ( 
                <ul>
                    {
                        items.map((item, index) => (
                        <li key={index}>{item}</li>
                            ))
                    }
                </ul>
            )}

        </div>
    );

};



function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

const items = ['Profile', 'Settings', 'Logout'];
  
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

      <h3>Build a Dropdown Menu</h3>
      
          <DropdownMenu items={items } />
           
    </div>
  );
}

export default AboutPage;
