type TextType = {
  MyText: string;
  MyType: string;
};

const Text = (text: TextType) => {
  const { MyText, MyType } = text;
  return (
    <>
      {MyType === "bold" && <strong>{MyText}</strong>}
      {MyType === "header" && <h1>{MyText}</h1>}
    </>
  );
};

export default Text;
