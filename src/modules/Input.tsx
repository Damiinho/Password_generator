import { InputInterface } from "../interfaces/interface";

const Input = (props: InputInterface) => {
  return (
    <div className="password-generator__input">
      <label>
        <input className="" type="text"></input>
        <img src={props.img} className="refresh" alt="Refresh"></img>
      </label>
    </div>
  );
};

export default Input;
