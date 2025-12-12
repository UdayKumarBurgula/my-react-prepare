// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CountdownTimer = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>{seconds} seconds remaining</p>
        </div>
    );
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

  return (
      <div>
          <h1>Create a Countdown Timer</h1>
          <CountdownTimer initialSeconds={60} />
      </div>
  );
}

export default AboutPage;
