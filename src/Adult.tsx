type AdultType = {
  age: number;
};

const Adult = (Age: AdultType) => {
  const MyAge = Age;
  return MyAge.age >= 20 ? <>성인</> : <>미성년자</>;
  //return <span>{age >=20 ? "성인" : "미성년자"}</span>
};

export default Adult;
