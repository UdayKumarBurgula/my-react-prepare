// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";

const radius = [3, 1, 2, 4];

// Logic for Area of Circle: πr²
const area = function (r) {
    return Math.PI * r * r;
};

// Logic for Circumference of Circle: 2πr
const circumference = function (r) {
    return 2 * Math.PI * r;
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

// Higher Order Function: accepts an array + logic function
const calculate = function (radiusArray, logic) {
    const output = [];
    for (let i = 0; i < radiusArray.length; i++) {
        output.push(logic(radiusArray[i]));
    }
    return output;
};
   
  return (
      <div>
          <h1>useState program</h1>
          {t('title') + "-" + t('content')}
          <br /><span>Area of each radius: </span>
          {
            calculate(radius, area)
          }
          <br /><span>Circumference of each radius: </span>
          {calculate(radius, circumference)}
      </div>
  );
}

export default AboutPage;
