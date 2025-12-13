// src/pages/AboutPage.js
import React, { useState, useEffect, useMemo, Suspense, useRef, useCallback, createContext, useContext, useReducer, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { io } from "socket.io-client";
import styles from "./Button.module.css";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";

function AboutPage() {
    // ✅ Use about namespace + fallback to "common"
    const { t } = useTranslation(["about", "common"]);

    const {
        data = [],
        isLoading,
        isError,
        error,
        refetch,
        isFetching
    } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos
    });

   
  return (
      <div>
          <h1>Custom hooks – reusable logic:</h1>
          {t('title') + "-" + t('content')} <br />
          <h1>React Query Demo</h1>

          {/* Initial loading */}
          {isLoading && <p>Loading todos...</p>}

          {/* Error state + retry */}
          {isError && (
              <div>
                  <p style={{ color: "red" }}>
                      Error: {error.message}
                  </p>
                  <button onClick={refetch}>Retry</button>
              </div>
          )}

          {/* Success state */}
          {!isLoading && !isError && (
              <>
                  {/* Background refetch indicator */}
                  {isFetching && <p>Refreshing data...</p>}

                  <ul>
                      {data.map(todo => (
                          <li key={todo.id}>
                              {todo.title}{" "}
                              {todo.completed ? "✅" : "❌"}
                          </li>
                      ))}
                  </ul>

                  {/* Manual refetch */}
                  <button onClick={refetch}>Refetch</button>
              </>
          )}

      </div>
  );
}

export default AboutPage;
