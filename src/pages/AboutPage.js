// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
import styles from "./Button.module.css";

const Button = function ({ children }) {
    return <button className={styles.btn}>{children}</button>;
}

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Forms – Controlled & UncontrolledForm (React controls value):</h1>
          {t('title') + "-" + t('content')} <br />
          <Button>Click Me!!! </Button>
      </div>
  );
}

export default AboutPage;
