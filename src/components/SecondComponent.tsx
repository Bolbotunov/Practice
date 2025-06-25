import { useEffect, useState } from "react";

type MyPropsType = {
  props: number;
};

type DataType = {
  title: string;
};

export default function SecondComponent({ props }: MyPropsType) {
  const [dataTest, setDataTest] = useState<DataType | null>(null);
  props = props * 10;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  type UsersType = {
    name: string;
    age: number;
    score: number;
  };

  // {
  //   25: { users: ["Alice", "Bob"], avgScore: 87.5 },
  //   30: { users: ["Charlie", "David"], avgScore: 72.5 },
  //   35: { users: ["Eve"], avgScore: 88 },
  // }
  const users: UsersType[] = [
    { name: "Alice", age: 25, score: 85 },
    { name: "Bob", age: 25, score: 90 },
    { name: "Charlie", age: 30, score: 75 },
    { name: "David", age: 30, score: 70 },
    { name: "Eve", age: 35, score: 88 },
  ];

  // function test(users: UsersType[]) {
  //   const res = {};
  //   users.forEach((acc, item) => {
  //     const {name, age, score} = users
  //     return name
  //   }, {});
  // }
  // console.log(test(users));

  // const xmlReq = new XMLHttpRequest();
  // xmlReq.open("GET", url);
  // xmlReq.onload = function () {
  //   if (xmlReq.status >= 200 && xmlReq.status < 300) {
  //     const response = JSON.parse(xmlReq.response);
  //     console.log("answer api:", response);
  //   } else {
  //     console.error("ошибка запроса", xmlReq.status);
  //   }
  // };
  // xmlReq.onerror = function () {
  //   console.error("сутевая ошибка");
  // };
  // xmlReq.send();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error:${response.status}`);
        }
        const data = await response.json();
        setDataTest(data);
      } catch (error) {
        console.error("error", error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div>
        <p>{`test my props: ${props ?? "ошибка"}`}</p>
        <p>title: {dataTest?.title}</p>
      </div>
    </>
  );
}
