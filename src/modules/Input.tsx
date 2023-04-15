const Input = (props: any) => {
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
