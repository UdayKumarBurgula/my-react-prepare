// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (<div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count+1) }>Increment</button>
        </div>)
}

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

   
  return (
      <div>
          <h1>useState program</h1>
          <Counter></Counter>
      </div>
  );
}

export default AboutPage;
