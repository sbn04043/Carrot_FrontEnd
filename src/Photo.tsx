type PhotoType = {
  image: string;
  explain: string;
};

const Photo = (props: PhotoType) => {
  const { image, explain } = props;
  return (
    <>
      <img src={image} />
      <article>{explain}</article>
    </>
  );
};

export default Photo;
