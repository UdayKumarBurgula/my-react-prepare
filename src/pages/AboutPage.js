// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";

var ControlledForm = function () {
    const [name, setName] = useState("");

    return (
        <form onSubmit={e => { e.preventDefault(); alert(name); }}>
            Set Name
            <input value={name} onChange={e => setName(e.target.value)} />
            <button>Submit</button>
        </form>
    );
};

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);
   
  return (
      <div>
          <h1>Forms – Controlled (React controls value):</h1>
          {t('title') + "-" + t('content')}
          <ControlledForm></ControlledForm>
      </div>
  );
}

export default AboutPage;
