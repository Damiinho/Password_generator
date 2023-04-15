const Includes = () => {
  return (
    <div className="password-generator__includes">
      <label>
        <input type="checkbox"></input>
        <p>Include Uppercase Letter</p>
      </label>
      <label>
        <input type="checkbox"></input>
        <p>Include Lowercase Letter</p>
      </label>
      <label>
        <input type="checkbox"></input>
        <p>Include Numers</p>
      </label>
      <label>
        <input type="checkbox"></input>
        <p>Include Symbols</p>
      </label>
    </div>
  );
};

export default Includes;
