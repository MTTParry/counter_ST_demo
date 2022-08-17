import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <button>-</button>
      <span>{value}</span>
      <button>+</button>
    </div>
  );
}

export default App;
