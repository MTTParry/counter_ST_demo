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
    setValue(value / 5);
  }

  return (
    <div className="App">
      <button onClick={lowerValue}>-</button>
      <span>{value}</span>
      <button onClick={upValue}>+</button>
      <br />
      <hr />
      <br />
      <button onClick={divide2}>÷2</button>
      <button onClick={divide5}>÷5</button>
    </div>
  );
}

export default App;
