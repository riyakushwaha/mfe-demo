import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const channel_host0 = new BroadcastChannel("counterChannel");
    channel_host0.onmessage = (event) => {
      if (event.data.type === "increment") {
        setCounter((prevCounter) => prevCounter + 1);
      }
    };

    const channel_remote0 = new BroadcastChannel("counterChannelReset");
    channel_remote0.onmessage = (event) => {
      if (event.data.type === "reset") {
        setCounter(0);
      }
    };

    return () => {
      channel_host0.close();
      channel_remote0.close();
    };
  }, []);

  return (
    <div className="App1">
      <header className="App1-header">
        <p>REMOTE1</p>
        <>Counter: {counter}</>
      </header>
    </div>
  );
}

export default App;
