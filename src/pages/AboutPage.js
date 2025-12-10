// src/pages/AboutPage.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            {[...Array(totalStars)].map((star, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => setRating(starValue)}
                        style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
                    >
                        ★
                    </span>
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
