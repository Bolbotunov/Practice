import SecondComponent from "./SecondComponent";

export default function TestJS() {
  const arr = [1, 20, 3];
  let a = arr.find((item) => (item === 20 ? item : ""));

  return (
    <>
      <h3>My TEst</h3>
      <p>
        {`стартовое:${a}`}
        <br></br>
      </p>
      <p>Итоговое число: {a && <SecondComponent props={a} />}</p>
    </>
  );
}
