import { useState } from "react";
import "./App.css";

function App() {
  const [hi, setHi] = useState("");

  return (
    <div className="App">
      <h1>Color ui</h1>
      <button onClick={() => setHi("Hi!! 😊")}>Say Hi</button>
      <h2>{hi}</h2>
    </div>
  );
}

export default App;
