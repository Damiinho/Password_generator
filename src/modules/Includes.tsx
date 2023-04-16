import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Includes = () => {
  const {
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
  } = useContext(AppContext);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    switch (name) {
      case "uppercase":
        setUppercase(checked);
        break;
      case "lowercase":
        setLowercase(checked);
        break;
      case "numbers":
        setNumbers(checked);
        break;
      case "symbols":
        setSymbols(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="password-generator__includes">
      <label>
        <input
          type="checkbox"
          name="uppercase"
          checked={uppercase}
          onChange={handleCheckboxChange}
        />
        <p>Include Uppercase Letter</p>
      </label>
      <label>
        <input
          type="checkbox"
          name="lowercase"
          checked={lowercase}
          onChange={handleCheckboxChange}
        />
        <p>Include Lowercase Letter</p>
      </label>
      <label>
        <input
          type="checkbox"
          name="numbers"
          checked={numbers}
          onChange={handleCheckboxChange}
        />
        <p>Include Numbers</p>
      </label>
      <label>
        <input
          type="checkbox"
          name="symbols"
          checked={symbols}
          onChange={handleCheckboxChange}
        />
        <p>Include Symbols</p>
      </label>
    </div>
  );
};

export default Includes;
