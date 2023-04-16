import { useContext } from "react";
import { InputInterface } from "../interfaces/interface";
import { AppContext } from "../contexts/AppContext";

const Input = (props: InputInterface) => {
  const { inputPassword, length, uppercase, lowercase, numbers, symbols } =
    useContext(AppContext);
  const { generatePassword } = useContext(AppContext);

  const handleOnClick = () => {
    generatePassword(length, uppercase, lowercase, numbers, symbols);
  };

  return (
    <div className="password-generator__input">
      <label>
        <input className="" type="text" value={inputPassword} readOnly></input>
        <img
          src={props.img}
          className="refresh"
          alt="Refresh"
          onClick={handleOnClick}
        ></img>
      </label>
    </div>
  );
};

export default Input;
