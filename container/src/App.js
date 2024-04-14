import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fieldValue, setFieldValue] = useState("");
  const [letterValue, setLetterValue] = useState("");

  // Function to handle field change
  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    setFieldValue(newValue);

    // Send message to micro frontend
    window.postMessage({ type: "nameUpdate", value: newValue }, "*");
  };

  useEffect(() => {
    // Listen for messages from host
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    if (event.data && event.data.type === "letterUpdate") {
      const newValue = event.data.value;
      setLetterValue(newValue);
    }

    console.log("CONTAINER APP: ", event.data, event.data.type);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h5>HOST application</h5>
        <input
          type="text"
          id="name"
          placeholder="Enter FirstName"
          value={fieldValue}
          onChange={handleFieldChange}
        />
        <p>{letterValue !== "" ? letterValue : "No message from child app"}</p>
      </header>
    </div>
  );
}

export default App;
