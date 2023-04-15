import { CopyInterface } from "../interfaces/interface";

const Copy = (props: CopyInterface) => {
  return (
    <div className="password-generator__copy-password">
      <button className="">
        <img src={props.img} className="copy" alt="copy"></img>
        <p>Copy password</p>
      </button>
    </div>
  );
};

export default Copy;
