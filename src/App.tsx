import { useState } from "react";
import "./App.css";
import SecondComponent from "./components/SecondComponent";
import TestJS from "./components/testJS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <TestJS />
      </div>
    </>
  );
}

export default App;
