import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const CharacterLength = () => {
  const { length, setLength } = useContext(AppContext);

  const changeLengthValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
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
          onChange={changeLengthValue}
        />
      </div>
    </div>
  );
};

export default CharacterLength;
