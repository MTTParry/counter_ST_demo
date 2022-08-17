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

  //divide
  function divide2() {
    setValue(value / 2);
  }

  function divide5() {
    setValue(value /5);
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
