import "./App.css";
import React from "react";
import { useState } from "react";
import RemoteWrapper from "./RemoteWrapper";
const RemoteApp = React.lazy(() => import("Remote/App"));

function App() {
  const [fieldValue, setFieldValue] = useState("");

  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    setFieldValue(newValue);

    const channel = new BroadcastChannel("userChannel");
    channel.postMessage({ type: "userNameUpdate", value: newValue });
  };

  return (
    <div className="App1">
      <header className="App-header1">
        <h5>HOST1</h5>
        <input
          type="text"
          id="name"
          placeholder="Enter Full Name"
          name="name"
          value={fieldValue}
          onChange={handleFieldChange}
        />
        <RemoteWrapper>
          <RemoteApp />
        </RemoteWrapper>
      </header>
    </div>
  );
}

export default App;
