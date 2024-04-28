import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
      width: "50vw",
      margin: "1rem",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export default RemoteWrapper;
