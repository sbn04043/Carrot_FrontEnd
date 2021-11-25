import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  const welcomeName = name;

  return (
    <>
      <input type="text" onChange={updateName} />
      <br />
      <>반갑습니다 {welcomeName}님</>
    </>
  );
};

export default WelcomeName;
