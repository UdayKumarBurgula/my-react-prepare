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

const Child = React.memo(({ onClick, data }) => {
    return <button onClick={onClick}>{data.text}</button>;
});

function Parent() {
    const data = useMemo(() => ({ text: "Click" }), []);
    const handleClick = useCallback(() => console.log("clicked"), []);

    return <Child data={data} onClick={handleClick} />;
}

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <Parent></Parent>
      </div>
  );
}

export default AboutPage;
