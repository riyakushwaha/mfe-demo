import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    const channel = new BroadcastChannel("counterChannelReset");
    channel.postMessage({ type: "reset" });
  };

  return (
    <div className="App2">
      <header className="App2-header">
        <p>REMOTE0</p>
        <button onClick={handleClick}>Reset Counter in Remote-1</button>
      </header>
    </div>
  );
}

export default App;
