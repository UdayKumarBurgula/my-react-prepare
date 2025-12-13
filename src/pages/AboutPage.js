// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
import styles from "./Button.module.css";
import styled from "styled-components";

const useWindowWidth = function () {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function onResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return width;
}

const Component = function () {
    const width = useWindowWidth();
    return <p >Width: {width}</p>;
}

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <Component></Component>
      </div>
  );
}

export default AboutPage;
