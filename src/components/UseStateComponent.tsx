import { useState } from "react";
type TypeInitialText = {
  initialText: string;
  activeText: string;
};

type PropsUseStateComponent = {
  text: string;
  setText: (value: string) => void;
  initialState: TypeInitialText;
};

export default function UseStateComponent({
  text,
  setText,
  initialState,
}: PropsUseStateComponent) {
  const [clicked, setClicked] = useState(false);
  function handleText() {
    setClicked(!clicked);
    setText(clicked ? initialState.initialText : initialState.activeText);
  }

  return (
    <div className={"helloDiv"} onClick={handleText}>
      <p>{text}</p>
    </div>
  );
}
