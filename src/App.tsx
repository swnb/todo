import React from "react";
import "antd/dist/antd.css";
import { ToDo } from "./todo";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ToDo />
    </ErrorBoundary>
  );
}

export default App;
