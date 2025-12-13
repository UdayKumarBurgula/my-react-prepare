// src/pages/AboutPage.js
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setChat((prev) => [...prev, data]);
        });
    }, []);

    const sendMessage = () => {
        socket.emit("send_message", message);
        setMessage("");
    };

  return (
      <div>
          <h1>Real-Time Chat</h1>
          <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
          />
          <button onClick={sendMessage}>Send</button>
          <div>
              {chat.map((msg, i) => (
                  <p key={i}>{msg}</p>
              ))}
          </div>
      </div>
  );
}

export default AboutPage;
