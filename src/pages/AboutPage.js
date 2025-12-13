// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
import styles from "./Button.module.css";
import styled from "styled-components";

const Box = function () {
    const boxRef = useRef();
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(boxRef.current.getBoundingClientRect().height);
    }, []);

    return (
        <>
            <div ref={boxRef} style={{ padding: 20, background: "lightblue" }}>
                Hello World
            </div>
            <p>Height: {height}px</p>
        </>
    );
}

const FocusInput = function () {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <FocusInput></FocusInput>
          <Box></Box>
      </div>
  );
}

export default AboutPage;
