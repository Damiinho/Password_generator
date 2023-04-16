import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const CharacterLength = () => {
  const { length, setLength } = useContext(AppContext);

  const changeLengthValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = parseInt(e.target.value);
    setLength(newLength);
  };

  return (
    <div className="password-generator__character-length-box">
      <div className="password-generator__character-length-box__title">
        Character Lengh
      </div>
      <div className="password-generator__character-length-box__number">
        {length}
      </div>
      <div className="password-generator__character-length-box__slider">
        <input
          type="range"
          id="length"
          name="length"
          min="4"
          max="16"
          defaultValue="6"
          onChange={changeLengthValue}
        />
      </div>
    </div>
  );
};

export default CharacterLength;
