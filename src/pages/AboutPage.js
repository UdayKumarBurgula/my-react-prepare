// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
const Child = function ({ value, onIncrement }) {
    return (
        <>
            <p>Count: {value}</p>
            <button onClick={onIncrement}>+1</button>
        </>
    );
};

const Parent = function () {
    const [count, setCount] = useState(0);
    return (
        <Child
            value={count}
            onIncrement={() => setCount(count + 1)}
        />
    );
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>useState program</h1>
          {t('title') + "-" + t('content')}

          <Parent></Parent>
      </div>
  );
}

export default AboutPage;
