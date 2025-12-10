// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';

const RealTimeSearch = ({ items }) => {
    const [query, setQuery] = useState('');

    const filterItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <input type="text" value={query} onChange={ e => setQuery(e.target.value) } placeholder="Search..." />
            <ul>
                {
                    filterItems.map((item, index) => (
                        <li key={index }>{item}</li>
                       ))
                }
            </ul>
        </div>);
};


function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
      <div>
          <h3>Create a Real-Time Search Filter</h3>
          <RealTimeSearch items={items} />
      </div>
  );
}

export default AboutPage;
