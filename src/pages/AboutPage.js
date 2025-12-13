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

const Button = function ({ children }) {
    return <button className={styles.btn}>{children}</button>;
}

const PrimaryButton = styled.button`
  background: #6200ee;
  color: white;
  padding: 8px 12px;
`;

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Forms – Controlled & UncontrolledForm (React controls value):</h1>
          {t('title') + "-" + t('content')} <br />
          <Button>Click Me!!! </Button>
          <PrimaryButton>Click me</PrimaryButton>
      </div>
  );
}

export default AboutPage;
