// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div> 
            {                
                [...Array(totalStars)].map((star, index) => {
                const starValue = index + 1;
                return (
                    <div>*</div>
                );
            })}
        </div>
    );
};


function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  return (
      <div>
          <h3>Implement a Star Rating Component</h3>
          <StarRating />
      </div>
  );
}

export default AboutPage;
