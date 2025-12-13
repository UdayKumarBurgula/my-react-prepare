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

function AboutPage() {
    // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const result = await response.json();
            setData(result.slice(0, 5));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount & retry
    useEffect(() => {
        fetchData();
    }, [retryCount]);

   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <h2>Async Data Fetch</h2>

          {loading && <p>Loading...</p>}

          {error && (
              <div>
                  <p style={{ color: "red" }}>Error: {error}</p>
                  <button onClick={() => setRetryCount(c => c + 1)}>
                      Retry
                  </button>
              </div>
          )}

          {!loading && !error && (
              <ul>
                  {data.map(post => (
                      <li key={post.id}>{post.title}</li>
                  ))}
              </ul>
          )}
      </div>
  );
}

export default AboutPage;
