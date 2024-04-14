import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fieldValue, setFieldValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [letterValue, setLetterValue] = useState("");

  const handleMessage = (event) => {
    if (event.data && event.data.type === "nameUpdate") {
      const newValue = event.data.value;
      setFieldValue(newValue);
    }

    if (event.data && event.data.type === "emailUpdate") {
      const newValue = event.data.value;
      setEmailValue(newValue);
    }

    console.log("CONTAINER APP: ", event.data, event.data.type);
  };

  useEffect(() => {
    // Listen for messages from host
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    setLetterValue(newValue);

    // Send message to micro frontend
    window.postMessage({ type: "letterUpdate", value: newValue }, "*");
  };

  return (
    <div className="App1">
      <header className="App1-header">
        <p>INTEGRATED application 1</p>
        <input
          type="text"
          id="fname"
          placeholder="First Name"
          value={fieldValue}
          onChange={(e) => setFieldValue(event.target.value)}
        />
        <br />
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          value={emailValue}
          onChange={(e) => setEmailValue(event.target.value)}
        />
        <br />
        <input
          type="text"
          id="letter"
          placeholder="Enter message for host application"
          value={letterValue}
          onChange={handleFieldChange}
        />
      </header>
    </div>
  );
}

export default App;
