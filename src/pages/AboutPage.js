// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
const Timer = function () {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(id); // cleanup
    }, []);

    return <p>{seconds}</p>;
};

const LoginButton = function () {
    function handleClick(e) {
        e.preventDefault();
        alert("Logging in...");
    }

    return <button onClick={handleClick}>Login</button>;
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>useState program</h1>
          {t('title') + "-" + t('content')}
          <Timer></Timer>
          <LoginButton></LoginButton>
      </div>
  );
}

export default AboutPage;
