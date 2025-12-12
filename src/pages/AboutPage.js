// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious}>Previous</button>
            <img src={images[currentIndex]} alt="carousel" />
            <button onClick={goToNext}>Next</button>
        </div>
    );
};


function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);
  const images = [
        'https://unsplash.com/s/photos/flowers',
        'https://t4.ftcdn.net/jpg/05/64/42/11/240_F_564421197_3vqtmdgdP2TgswoRbWqPeeXFX1ZBd272.jpg',
        'https://i.pinimg.com/474x/ec/a6/da/eca6da2e377514a38db858305a71a8d2.jpg',
    ];


  return (
      <div>
          <h3>Build a Carousel Component</h3>
          <Carousel images={images} />
      </div>
  );
}

export default AboutPage;
