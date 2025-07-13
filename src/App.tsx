import "./App.css";
import "./styles/styles.css";
import UseStateComponent from "./components/UseStateComponent";
import { useState } from "react";
import UseChildren from "./components/UseChildren";
import UseAnotherChild from "./components/UseAnotherChild";

function App() {
  const initialState = {
    initialText: "hello",
    activeText: "clicked",
  };
  const [text, setText] = useState(initialState.initialText);

  return (
    <>
      <UseStateComponent
        text={text}
        setText={setText}
        initialState={initialState}
      />
      <UseChildren>
        <UseAnotherChild />
      </UseChildren>
    </>
  );
}

export default App;
