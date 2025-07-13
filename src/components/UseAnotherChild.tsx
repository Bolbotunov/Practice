import { useEffect } from "react";

export default function UseAnotherChild() {
  const NUMBER = 15;

  function createArr() {
    let array = Array.from({ length: NUMBER }, (_, i) => i + 1);
    return array;
  }

  return (
    <div className="list">
      <ul>
        {createArr().map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
