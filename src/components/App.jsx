import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("it");
  const [current, fetchTime] = useState(time);
  function getTime() {
    const newTime = new Date().toLocaleTimeString("it");
    fetchTime(newTime);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{current}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
