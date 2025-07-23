import { memo, useEffect, useRef, useState } from "react";

export default memo(function UseAnotherChild(testText: string) {
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");
  const myRef = useRef(100);
  console.log(myRef.current);
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const newUrl = "https://jsonplaceholder.typicode.com/todos/2";
  const NUMBER = 5;

  function createArr() {
    return Array.from({ length: NUMBER }, (_, i) => i + 1);
  }
  useEffect(() => {
    console.log("компонент смонтирован");
    console.log("testText", testText);
    getData(url);
    return () => console.log("компонент размонтирован");
  }, [testText]);

  async function getData(url: string) {
    try {
      console.log("req:", state);
      let promise = await fetch(url);
      let data = await promise.json();
      console.log(data);
    } catch (err) {
      console.log("err", err);
    }
  }

  function queryHandler(e: string) {
    console.log("query input", e);
    setQuery(e);
  }

  // useEffect(() => {
  //   getData(newUrl);
  // }, [query]);

  return (
    <div className="list">
      <input
        placeholder="inp"
        onChange={(e) => queryHandler(e.target.value)}
      ></input>
      <ul>
        {createArr().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});
