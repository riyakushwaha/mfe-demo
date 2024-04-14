import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [fieldValue, setFieldValue] = useState("");

  // Function to handle field change
  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    setFieldValue(newValue);

    // Send message to micro frontend
    window.postMessage({ type: "emailUpdate", value: newValue }, "*");
  };

  return (
    <div className="App2">
      <header className="App2-header">
        <p>INTEGRATED application 2</p>
        <input
          type="text"
          id="email"
          placeholder="Enter EmailAddress"
          name="email"
          value={fieldValue}
          onChange={handleFieldChange}
        />
      </header>
    </div>
  );
}

export default App;
