// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n"; // IMPORTANT: initialize i18n before using translations
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,            // auto retry on failure
            staleTime: 5000,     // cache considered fresh for 5s
            refetchOnWindowFocus: true
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
