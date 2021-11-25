import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const updateNum1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = Number.parseInt(event.currentTarget.value);
    setNum1(newNum);
    console.log(num1);
  };

  const updateNum2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNum = Number.parseInt(event.currentTarget.value);
    setNum2(newNum);
    console.log(num2);
  };

  const calculated = num1 + num2;

  return (
    <section>
      <input type="text" onChange={updateNum1} />
      +
      <input type="text" onChange={updateNum2} />={calculated}
    </section>
  );
};

export default Adder;
