import { TitleInterface } from "../interfaces/interface";

const Title = (props: TitleInterface) => {
  return <div className="password-generator__title">{props.name}</div>;
};

export default Title;
