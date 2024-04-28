import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import RemoteWrapper from "./RemoteWrapper";
const RemoteApp = React.lazy(() => import("Remote/App"));
const HostApp = React.lazy(() => import("HostApp/App"));

function App() {
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    const channel = new BroadcastChannel("userChannel");
    channel.onmessage = (event) => {
      if (event.data.type === "userNameUpdate") {
        setFieldValue(event.data.value);
      }
    };

    return () => {
      channel.close();
    };
  }, []);

  const handleClick = () => {
    const channel = new BroadcastChannel("counterChannel");
    channel.postMessage({ type: "increment" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h6>HOST0</h6>
        <p>Current User: {fieldValue}</p>
        <button onClick={handleClick}>Increment Counter in Remote-1</button>
        <RemoteWrapper>
          <RemoteApp />
        </RemoteWrapper>
        <RemoteWrapper>
          <HostApp />
        </RemoteWrapper>
      </header>
    </div>
  );
}

export default App;
