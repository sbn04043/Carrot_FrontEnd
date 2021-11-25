import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      let star = "";
      const starLength = newName.length - 2;
      for (let i = 0; i < starLength; i++) {
        star += "*";
      }
      newName = newName[0] + star + newName[starLength + 1];
    }
    setName(newName);
  };

  return (
    <>
      <input type="text" onChange={updateName} />
      <>{name}</>
    </>
  );
};

export default HiddenName;
