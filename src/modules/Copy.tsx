import { AppContext } from "../contexts/AppContext";
import { CopyInterface } from "../interfaces/interface";
import { useContext } from "react";

const Copy = (props: CopyInterface) => {
  const { generatePassword, length } = useContext(AppContext);

  const handleCopyClick = () => {
    generatePassword(length);
    console.log("działa");
  };

  return (
    <div className="password-generator__copy-password">
      <button onClick={handleCopyClick} className="">
        <img src={props.img} className="copy" alt="copy"></img>
        <p>Copy password</p>
      </button>
    </div>
  );
};

export default Copy;
