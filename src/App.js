import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function lowerValue() {
    setValue(value - 1);
  }

  function upValue() {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <button onClick={lowerValue}>-</button>
      <span>{value}</span>
      <button onClick={upValue}>+</button>
    </div>
  );
}

export default App;
