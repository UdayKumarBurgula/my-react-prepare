// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


// Create a Search Bar
const SearchBar = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

      <h3>Create a Search Bar</h3>
      <SearchBar items={items} />
     
    </div>
  );
}

export default AboutPage;
