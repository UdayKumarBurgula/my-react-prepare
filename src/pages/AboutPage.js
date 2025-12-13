// src/pages/AboutPage.js
import React, { useState, useEffect, useMemo, useRef, useCallback, createContext, useContext, useReducer, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
import styles from "./Button.module.css";
import styled from "styled-components";


const WithMemo = function () {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    // ✅ Only recalculates when `count` changes
    const value = useMemo(() => {
        console.log("Calculating...");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
            total += i;
        }
        return total + count;
    }, [count]);

    return (
        <>
            <p>Value: {value}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </>
    );
}

function WithoutMemo() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    // ❌ Runs on every render
    const slowCalculation = () => {
        console.log("Calculating...");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
            total += i;
        }
        return total + count;
    };

    const value = slowCalculation();

    return (
        <>
            <p>Value: {value}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </>
    );
}

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <WithMemo></WithMemo>
      </div>
  );
}

export default AboutPage;
