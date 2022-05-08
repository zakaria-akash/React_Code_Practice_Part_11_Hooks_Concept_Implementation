import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(null);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
    // console.log(time);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
