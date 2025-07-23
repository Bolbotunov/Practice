import "./App.css";
import "./styles/styles.css";
import UseStateComponent from "./components/UseStateComponent";
import { useEffect, useMemo, useRef, useState } from "react";
import UseChildren from "./components/UseChildren";
import UseAnotherChild from "./components/UseAnotherChild";
import LifeCycleDemo from "./components/ClassComponent";

export type TypeA = {
  text: string;
  count: number;
};

const initialState = {
  initialText: "hello",
  activeText: "clicked",
};

function App() {
  const renderCountRef = useRef(1);
  const [testText, setTestText] = useState("firstText");
  const [text, setText] = useState(initialState.initialText);
  const [a, b]: [string, (value: string) => void] = useState("x");

  // 🔁 Счётчик рендеров
  useEffect(() => {
    console.log(`📦 App отрендерен: ${renderCountRef.current} раз`);
    renderCountRef.current += 1;
  });

  // ✅ Мемоизация массива
  const arr = useMemo(() => {
    const result = Array.from({ length: 10 }, (_, i) => i);
    console.log("useMemo пересчитал массив:", result);
    return result;
  }, [testText]);

  function testTextHandle() {
    setTestText((prev) => (prev === "firstText" ? "newText" : "firstText"));
  }

  return (
    <>
      <button onClick={testTextHandle}>Изменить testText</button>
      <div>testText: {testText}</div>
      <div>Рендеров: {renderCountRef.current}</div>

      <ul>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={testTextHandle}>btn </button>
      <button onClick={() => setText("c")}>btn 2 </button>
      <div>{testText}</div>
    </>
  );
}

export default App;
