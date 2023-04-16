import { AppContext } from "../contexts/AppContext";
import { CopyInterface } from "../interfaces/interface";
import { useContext, useState } from "react";

const Copy = (props: CopyInterface) => {
  const { inputPassword } = useContext(AppContext);
  const [buttonText, setButtonText] = useState("Copy password");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputPassword);
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy password");
    }, 500);
  };

  return (
    <div className="password-generator__copy-password">
      <button onClick={handleCopyClick} className="">
        <img src={props.img} className="copy" alt="copy"></img>
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default Copy;
