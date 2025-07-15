import "./App.css";
import "./styles/styles.css";
import UseStateComponent from "./components/UseStateComponent";
import { useState } from "react";
import UseChildren from "./components/UseChildren";
import UseAnotherChild from "./components/UseAnotherChild";
import LifeCycleDemo from "./components/ClassComponent";

export type TypeA = {
  text: string;
  count: number;
};

function App() {
  const initialState = {
    initialText: "hello",
    activeText: "clicked",
  };

  const [text, setText] = useState(initialState.initialText);

  let a: TypeA = {
    text: "",
    count: 0,
  };
  return (
    <>
      {/* <UseStateComponent
        text={text}
        setText={setText}
        initialState={initialState}
      /> */}
      {/* <UseChildren>
        <UseAnotherChild />
      </UseChildren> */}
      <LifeCycleDemo a={a} />
    </>
  );
}

export default App;
