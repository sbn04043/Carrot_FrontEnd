type TitleType = {
  title: string;
  subtitle?: string;
};

const Title = (props: TitleType) => {
  const { title, subtitle } = props;
  return (
    <section>
      <h1>{title}</h1>
      <hr />
      <h3>{subtitle}</h3>
    </section>
  );
};

export default Title;
