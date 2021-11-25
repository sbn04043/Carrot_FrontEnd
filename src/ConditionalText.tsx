import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [txt, setTxt] = useState<string>("");

  const updateTxt = (event: ChangeEvent<HTMLInputElement>) => {
    const newTxt = event.currentTarget.value;
    //if (newTxt.length > 5) setTxt(newTxt);
    newTxt.length > 5 && setTxt(newTxt);
  };

  return (
    <>
      <input type="text" onChange={updateTxt} />
      <>{txt.length > 5 && txt}</>
    </>
  );
};

export default ConditionalText;
