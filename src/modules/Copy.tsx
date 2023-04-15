import { AppContext } from "../contexts/AppContext";
import { CopyInterface } from "../interfaces/interface";
import { useContext } from "react";

const Copy = (props: CopyInterface) => {
  const { counter, setCounter } = useContext(AppContext);

  const handleCopyClick = () => {
    setCounter(counter + 1);
    console.log(counter);
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
