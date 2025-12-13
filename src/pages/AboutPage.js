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

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return { count: state.count + 1 };
        case "dec":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "dec" })}>-</button>
            <button onClick={() => dispatch({ type: "inc" })}>+</button>
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
          <Counter></Counter>
      </div>
  );
}

export default AboutPage;
